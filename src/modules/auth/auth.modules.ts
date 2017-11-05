import { LoginPage } from './pages/login/login';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { IonicPageModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { reducers } from './reducers/index';
import { AuthEffects } from './effects/auth.effects';
import { AuthService } from './providers/auth.service';

export const COMPONENTS = [LoginPage];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        BrowserModule,
        IonicPageModule.forChild([LoginPage]),
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class AuthModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: RootAuthModule,
            providers: [AuthService]
        };
    }
}

@NgModule({
    imports: [
        AuthModule,
        StoreModule.forFeature('auth', reducers),
        EffectsModule.forFeature([AuthEffects])
    ]
})
export class RootAuthModule {
}
