import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import Header from "./header";

export default function DefaultLayout() {
    const {user,token} = useStateContext()

    if(!token) {
        return <Navigate to="/login" />
    }

    return(
        <Outlet />
    )
}