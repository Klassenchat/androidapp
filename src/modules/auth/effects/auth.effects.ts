import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { AuthService } from '../providers/auth.service';
import * as Auth from '../actions/auth';

import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/catch';
import { Events } from 'ionic-angular';
import 'rxjs/add/operator/do';
import { NAV_GO_TO_HOME, NAV_GO_TO_LOGIN } from '../../../app/app.component';

@Injectable()
export class AuthEffects {


    @Effect()
    login$ = this.actions$
        .ofType(Auth.LOGIN)
        .map((action: Auth.Login) => action.payload)
        .exhaustMap(auth =>
            this.authService
                .login(auth)
                .map(user => new Auth.LoginSuccess({user}))
                .catch(error => of(new Auth.LoginFailure(error)))
        );

    @Effect({dispatch: false})
    loginSuccess$ = this.actions$
        .ofType(Auth.LOGIN_SUCCESS)
        .do(() => this.events.publish(NAV_GO_TO_HOME, {}));

    @Effect({dispatch: false})
    loginRedirect$ = this.actions$
        .ofType(Auth.LOGIN_REDIRECT, Auth.LOGOUT)
        .do(() => this.events.publish(NAV_GO_TO_LOGIN));

    constructor(private actions$: Actions,
                private authService: AuthService,
                private events: Events) {
    }
}
