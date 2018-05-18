import { inject } from 'aurelia-framework';
import { API } from './api';
import { Result } from './core/result';

@inject(API)
export class Login {

    email: string;
    password: string;

    private _errors: string[];

    get errors() : string[] {
        return this._errors;
    }

    constructor(private api: API) {
        this.clean();
    }

    private clean() {
        this._errors = [];
        this.email = null;
        this.password = null;
    }

    validateFields() {
        if(!this.email) {
            this.errors.push('Informe your email');
        }

        if(!this.password) {
            this.errors.push('Inform your password');
        }
    }

    login() {
        this._errors = [];
        this.validateFields();

        if(this.errors.length == 0) {
            this.api.validateUser(
                this.email, 
                this.password,
                result => {
                    if(result.success){
                        //todo: redirect to page!
                        alert('Success login!')
                    } else {
                        this._errors = result.errors;
                    }
                }
            )
        }
    }
}