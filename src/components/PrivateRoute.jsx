import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";

export default function PrivateRoute(){
    const {token} = useContext(AuthContext)
    console.log("token recebido no Private", token)
    const isAuthenticated = !!token //transforma em boolean
    
    return isAuthenticated ? <Outlet/> : <Navigate to={'/'}/>; 
    //se o valor for V ele retorna Outlet mostra as páginas, se F volta login.
}
