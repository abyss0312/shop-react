import { UserSelector } from "@/redux/userReducer";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hookStore.utilities";


const Protected = (props: any) => {

    const {isAuth} = useAppSelector(UserSelector)
    //const isAuth = true;
    if (!isAuth) {
    return <Navigate to="/login" replace />;
    }
    return props.children;

};


export default Protected;