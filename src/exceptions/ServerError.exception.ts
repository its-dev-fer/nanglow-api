export class ServerError extends Error{
    message: string;

    constructor(message?: string){
        super();
        this.message = message ?? "Error";
    }
}