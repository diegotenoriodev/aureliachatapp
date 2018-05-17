import { inject } from 'aurelia-framework';
import { API, Result } from './api';

@inject(API)
export class Register {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;

    private _errors: string[];

    get errors() : string[] {
        return this._errors;
    }

    constructor(private api: API) { }

    validateFields() {
        //todo: validate fields
    }

    save() {
        this.validateFields();

        if(this._errors.length){
            this.api.saveRegister(
                this.name,
                this.email,
                this.password,
                this.confirmPassword,
                result => {
                    if(!result.success) {
                        this._errors = result.errors;
                    }
                }
            );
        }
    }
}