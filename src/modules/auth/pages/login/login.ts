import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromAuth from '../../reducers';
import { Login } from '../../actions/auth';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    private form: FormGroup;

    /* tslint:disable */
    private isPending$: Observable<boolean> = this.store.select(state => state.auth.loginPage.pending);
    private errorMessage$: Observable<string | null> = this.store.select(state => state.auth.loginPage.error);
    /* tslint:enable */

    constructor(private store: Store<fromAuth.State>,
                private formBuilder: FormBuilder) {
        this.form = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    login() {
        this.store.dispatch(new Login({
            username: 'test',
            password: 'test'
        }));
    }
}
