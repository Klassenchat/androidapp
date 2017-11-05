import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicPageModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { TasksPage } from './pages/tasks';

export const COMPONENTS = [TasksPage];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        BrowserModule,
        IonicPageModule.forChild(COMPONENTS)
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class TaskModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: RootTaskModule,
            providers: []
        };
    }
}

@NgModule({
    imports: []
})

export class RootTaskModule {
}

