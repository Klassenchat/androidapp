import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GroupsPage } from '../pages/groups/groups';
import { ChatPage } from '../pages/chat/chat';
import { TasksPage } from '../pages/tasks/tasks';
import { LoginPage } from '../pages/login/login';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToTasks(params){
    if (!params) params = {};
    this.navCtrl.setRoot(TasksPage);
  }
  goToGroups(params){
    if (!params) params = {};
    this.navCtrl.push(GroupsPage);
  }goToChats(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ChatPage);
  }
}
