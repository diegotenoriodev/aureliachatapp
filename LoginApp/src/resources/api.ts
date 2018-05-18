import { inject, ResourceLoadContext } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import { CallbackResult } from './core/callback-result';
import { User } from './core/user';

export class API {
    private users: User[] = [];

    saveRegister(name: string, email: string, password: string, 
        passwordConf: string, callback: CallbackResult) {
        //TODO: make a call to the server
        this.users.push(new User(name, email, password));

        callback({ success: true, errors: null });
    }
}