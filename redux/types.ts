// these classes are used to represent errors that are thrown by the API

export class HttpApiError extends Error {
    errorCode: number;
    constructor(errorCode: number, message: string) {
        super(message);
        this.errorCode = errorCode;
    }
}

export class NetworkError extends Error {
    constructor(message?: string) {
        super(message);
    }
}

export class GenericError extends Error {
    constructor(message?: string) {
        super(message);
        this.name = 'GenericError';
    }
}