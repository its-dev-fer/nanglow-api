export class CategoriaNotFound extends Error{
    message: string;

    constructor(message?: string){
        super();
        this.message = message ?? "Error";
    }
}