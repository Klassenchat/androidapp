import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TasksPage } from '../../../../pages/tasks/tasks';
import * as fromAuth from '../../reducers';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    private form: FormGroup;
    private isPending$ = this.store.select(fromAuth.getLoginPagePending);
    private errorMessage$ = this.store.select(fromAuth.getLoginPageError);

    constructor(private store: Store<fromAuth.State>,
                private formBuilder: FormBuilder,
                private navCtrl: NavController) {
       this.form = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });

    }

    login() {
        this.navCtrl.setRoot(TasksPage);
    }
}
