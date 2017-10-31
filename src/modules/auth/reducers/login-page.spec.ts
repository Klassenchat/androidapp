import * as fromLoginPage from './login-page';
import { reducer } from './login-page';
import { Login, LoginSuccess, LoginFailure } from '../actions/auth';
import { Authenticate, User } from '../models/user';
import { expectjs, registerSnapshots } from "jasmine-snapshot";
import { snapshots } from './__snapshots__/login-page.snapshots';

describe('LoginPageReducer', () => {
    beforeAll(() =>
    {
        registerSnapshots(snapshots, "login-page");
    });

    describe('undefined action', () => {
        it('should return the default state', () => {
            const action = {} as any;

            const result = reducer(undefined, action);

            expectjs(result).toMatchSnapshot();
        });
    });

    describe('LOGIN', () => {
        it('should make pending to true', () => {
            const user = { username: 'test' } as Authenticate;
            const createAction = new Login(user);

            const result = reducer(fromLoginPage.initialState, createAction);

            expectjs(result).toMatchSnapshot();
        });
    });

    describe('LOGIN_SUCCESS', () => {
        it('should have no error and no pending state', () => {
            const user = { name: 'test' } as User;
            const createAction = new LoginSuccess({ user });

            const result = reducer(fromLoginPage.initialState, createAction);

            expectjs(result).toMatchSnapshot();
        });
    });

    describe('LOGIN_FAILURE', () => {
        it('should have an error and no pending state', () => {
            const error = 'login failed';
            const createAction = new LoginFailure(error);

            const result = reducer(fromLoginPage.initialState, createAction);

            expectjs(result).toMatchSnapshot();
        });
    });
});
