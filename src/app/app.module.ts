import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TasksPage } from '../pages/tasks/tasks';
import { GroupsPage } from '../pages/groups/groups';
import { ChatPage } from '../pages/chat/chat';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AuthModule } from '../modules/auth/auth.modules';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './app.reducer';
import { environment } from './environment';




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
        AuthModule.forRoot()
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
