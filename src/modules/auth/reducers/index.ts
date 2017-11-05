import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../../../app/app.reducer';
import * as fromAuth from './auth';
import * as fromLoginPage from './login-page';

export interface AuthState {
    status: fromAuth.State;
    loginPage: fromLoginPage.State;
}

export interface State extends fromRoot.State {
    auth: AuthState;
}

export const reducers = {
    status: fromAuth.reducer,
    loginPage: fromLoginPage.reducer,
};
