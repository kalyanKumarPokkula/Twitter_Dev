

class ValidationError extends Error{
    constructor(
        message
    ){
        this.message = message
        super();
    }
}

export default ValidationError;