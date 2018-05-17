import { inject, ResourceLoadContext } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';

export class API {
    saveRegister(name: string, email: string, password: string, 
        passwordConf: string, callback: CallbackResult) {
        //TODO: make a call to the server
        callback({ success: true, errors: null });
    }
}

export class Result {
    success: boolean;
    errors: string[];

    constructor(){
        this.errors = [];
    }
}

export interface CallbackResult { ( result: Result ) }