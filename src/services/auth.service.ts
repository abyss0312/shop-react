import { GenericResponse, Login, SignupModel } from "@/models"
import { instance } from "@/utilities"



export const AuthService = {


    async login(user: Login){

     
        return await instance.post('/auth/login',user);

    },

    async signup(user: SignupModel){

     
        return await instance.post('/auth/signup',user);

    }



}