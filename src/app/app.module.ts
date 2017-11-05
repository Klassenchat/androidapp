import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { GroupsPage } from '../pages/groups/groups';
import { ChatPage } from '../pages/chat/chat';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AuthModule } from '../modules/auth/auth.modules';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './app.reducer';
import { environment } from '../environments/environment';
import { TaskModule } from '../modules/task/task.modules';
import { TasksPage } from '../modules/task/pages/tasks';


@NgModule({
    declarations: [
        MyApp,
        TasksPage,
        GroupsPage,
        ChatPage,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        StoreModule.forRoot(reducers, {metaReducers}),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        EffectsModule.forRoot([]),
        AuthModule.forRoot(),
        TaskModule.forRoot()
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        TasksPage,
        GroupsPage,
        ChatPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
