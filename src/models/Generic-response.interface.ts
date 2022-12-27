export interface GenericResponse<T>{

    code:number;

    error:ErrorObject | string;

    validationResult:boolean;

    data: T;


}

export interface ErrorObject {
    statusCode:number;
    message:string[] ;
    error:string;
}