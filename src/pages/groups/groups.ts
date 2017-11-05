import { Component } from '@angular/core';
import { MyApp } from '../../app/app.component';

@Component({
    selector: 'page-groups',
    templateUrl: 'groups.html'
})
export class GroupsPage {

    constructor() {
    }

    backToGroupTasks(params) {
        // if (!params) params = {};
        // this.app.goToTasks();
    }

}
