import { Route, Routes } from "react-router-dom";
import {HomePage, SignupPage} from '@/pages'
import { LoginPage } from "@/pages";


export function RoutesApp(){

    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
        </Routes>
    )
}