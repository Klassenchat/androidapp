import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Authenticate, User } from '../models/user';
import { _throw } from 'rxjs/observable/throw';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

    constructor() {
    }

    public login({username, password}: Authenticate): Observable<User> {
        /**
         * Simulate a failed login to display the error
         * message for the login form.
         */
        if (username !== 'test') {
            return _throw('Invalid username or password');
        }

        return of({name: 'User'});
    }

    logout(): Observable<boolean> {
        return of(true);
    }

}
