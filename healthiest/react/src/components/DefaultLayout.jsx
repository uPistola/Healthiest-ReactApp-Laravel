import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import Header from "./header";
import { useEffect } from "react";
import axiosClient from "../axios-client";


export default function DefaultLayout() {
    const {user,token, setUser} = useStateContext()


    if(!token) {
        return <Navigate to="/login" />
    }

    useEffect(() => {
        axiosClient.get('/user')
            .then(({data}) => {
                setUser(data)
            })
    },[])

    return(
        <Outlet />
    )
}