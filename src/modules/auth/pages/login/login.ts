import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TasksPage } from '../../../../pages/tasks/tasks';


@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {

    constructor(public navCtrl: NavController) {
    }


    login() {
        this.navCtrl.setRoot(TasksPage);
    }

}
