import {useLocalStorage} from "react-use"
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
    const [token, _] = useLocalStorage("token", "")

    return token ? <Outlet/> : <Navigate to={"/login"}/>

}

export default ProtectedRoute;