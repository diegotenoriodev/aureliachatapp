import { inject, ResourceLoadContext } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import { CallbackResult } from './core/callback-result';
import { User } from './core/user';
import { Result } from './core/result';

export class API {
    private users: User[] = [];

    saveRegister(name: string, email: string, password: string, 
        passwordConf: string, callback: CallbackUserResult) {
        //TODO: make a call to the server
        let user = new User(name, email, password);
        this.users.push(user);

        callback(new UserResult(true, null, user));
    }

    validateUser(email: string, password: string, callback: CallbackUserResult) {
        console.log(email);
        let user = this.users.find(r => r.email == email);

        if(user) {
            if(user.password == password) {
                callback(new UserResult(true, null, user));
                return;
            }
        }

        callback(new UserResult(false,['email or password incorrect'], null));
    }
}

export interface CallbackUserResult {
    (result: UserResult)
}

export class UserResult extends Result {
    user: User;

    constructor(success: boolean, errors: string[], user: User) {
        super(success, errors);
        this.user = user;
    }
}