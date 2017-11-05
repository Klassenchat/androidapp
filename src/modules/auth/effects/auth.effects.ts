import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { AuthService } from '../providers/auth.service';
import * as Auth from '../actions/auth';

import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/catch';
import { App, NavController } from 'ionic-angular';
import { TasksPage } from '../../../pages/tasks/tasks';
import { LoginPage } from '../pages/login/login';
import 'rxjs/add/operator/do';

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
        .do(() => this.navCtrl.setRoot(TasksPage));

    @Effect({dispatch: false})
    loginRedirect$ = this.actions$
        .ofType(Auth.LOGIN_REDIRECT, Auth.LOGOUT)
        .do(() => this.navCtrl.setRoot(LoginPage));


    readonly ROOT_NAV_ID: string = 'n4';

    constructor(private actions$: Actions,
                private authService: AuthService,
                private app: App) {
    }

    get navCtrl(): NavController {
        return <NavController>this.app.getRootNavById(this.ROOT_NAV_ID);
    }
}
