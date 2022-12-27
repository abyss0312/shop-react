


export interface SignupModel{
    firstname:string;
    lastname:string;
    birthdate:string;
    username:string;
    password:string;
}

export interface SignupForm{
    firstname:string;
    lastname:string;
    birthdate:string;
    username:string;
    password:string;
    confPass:string;
}


export const SignupModelEmpty:SignupModel = {
    firstname: "",
    lastname: "",
    birthdate: "",
    username: "",
    password: ""
}

export const SignupFormEmpty:SignupForm = {
    firstname: "",
    lastname: "",
    birthdate: "2017-05-24",
    username: "",
    password: "",
    confPass: ""
}