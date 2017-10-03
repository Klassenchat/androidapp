import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TasksPage} from "../tasks/tasks";

@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html'
})
export class GroupsPage {

  constructor(public navCtrl: NavController) {
  }

  backToGroupTasks(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(TasksPage);
  }

}
