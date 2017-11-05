import * as fromAuth from './auth';
import { reducer } from './auth';
import { Login, LoginSuccess, Logout } from '../actions/auth';
import { Authenticate, User } from '../models/user';
import { expectjs, registerSnapshots } from "jasmine-snapshot";
import { snapshots } from './__snapshots__/auth.snapshots';

describe('AuthReducer', () => {
    beforeAll(() =>
    {
        registerSnapshots(snapshots, "auth-test");
    });

    describe('undefined action', () => {
        it('should return the default state', () => {
            const action = {} as any;

            const result = reducer(undefined, action);

            /**
             * Snapshot tests are a quick way to validate
             * the state produced by a reducer since
             * its plain JavaScript object. These snapshots
             * are used to validate against the current state
             * if the functionality of the reducer ever changes.
             */
            expectjs(result).toMatchSnapshot();
        });
    });

    describe('wrong login payload', () => {
        it('should NOT authenticate a user', () => {
            const user = {username: 'someUserName'} as Authenticate;
            const createAction = new Login(user);

            const result = reducer(fromAuth.initialState, createAction);

            expectjs(result).toMatchSnapshot();
        });
    });

    describe('LOGIN_SUCCESS', () => {
        it('should add a user set loggedIn to true in auth state', () => {
            const user = {name: 'test'} as User;
            const createAction = new LoginSuccess({user});

            const result = reducer(fromAuth.initialState, createAction);

            expectjs(result).toMatchSnapshot();
        });
    });

    describe('LOGOUT', () => {
        it('should logout a user', () => {
            const initialState = {
                loggedIn: true,
                user: {name: 'test'},
            } as fromAuth.State;
            const createAction = new Logout();

            const result = reducer(initialState, createAction);

            expectjs(result).toMatchSnapshot();
        });
    });
});
