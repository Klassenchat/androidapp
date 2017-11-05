import { Component, ViewChild } from '@angular/core';
import { Events, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GroupsPage } from '../pages/groups/groups';
import { ChatPage } from '../pages/chat/chat';
import { LoginPage } from '../modules/auth/pages/login/login';
import { TasksPage } from '../modules/task/pages/tasks';


export const NAV_GO_TO_LOGIN: string = 'nav:goToLogin';
export const NAV_GO_TO_HOME: string = 'nav:goToHome';


@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) navCtrl: Nav;
    rootPage: any = LoginPage;

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, events: Events) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });

        events.subscribe(NAV_GO_TO_LOGIN, () => {
            this.goToLogin();
        });

        events.subscribe(NAV_GO_TO_HOME, (params) => {
            this.goToTasks(params);
        });
    }

    goToTasks(params) {
        if (!params) params = {};
        this.navCtrl.setRoot(TasksPage);
    }

    goToLogin() {
        this.navCtrl.setRoot(LoginPage);
    }

    goToGroups(params) {
        if (!params) params = {};
        this.navCtrl.push(GroupsPage);
    }

    goToChats(params) {
        if (!params) params = {};
        this.navCtrl.setRoot(ChatPage);
    }
}
