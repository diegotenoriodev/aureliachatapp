export class Result {
    success: boolean;
    errors: string[];

    constructor(success: boolean, errors: string[]) {
        this.success = success;
        this.errors = errors;
    }
}