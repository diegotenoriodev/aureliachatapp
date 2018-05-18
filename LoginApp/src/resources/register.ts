import { inject } from 'aurelia-framework';
import { API } from './api';

@inject(API)
export class Register {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;

    successMessage: string;

    private _errors: string[];

    get errors() : string[] {
        return this._errors;
    }

    constructor(private api: API) { 
        this.clean();
    }

    validateFields() {
        this._errors = [];

        if(!this.name) {
            this._errors.push('Inform your name');
        }

        if(!this.email) {
            this._errors.push('Inform your email');
        }

        if(!this.password) {
            this._errors.push('Inform your password');
        }
        
        if(!this.confirmPassword) {
            this._errors.push('Inform password confirmation');
        }

        if(this.password !== this.confirmPassword) { 
            this._errors.push('Password and password confirmation do no match'); 
        }
    }

    clean() {
        this.name = null;
        this.email = null;
        this.password = null;
        this.confirmPassword = null;
        this._errors = [];
        this.successMessage = null;
    }

    save() {
        console.log(this);
        this.validateFields();

        console.log(this.errors);
        if(!this._errors.length){

            this.api.saveRegister(
                this.name,
                this.email,
                this.password,
                this.confirmPassword,
                result => {
                    if(result.success) {
                        this.clean();
                        this.successMessage = 'Register was created successifuly!';
                    } else {
                        this._errors = result.errors;
                    }
                }
            );

        }
    }
}