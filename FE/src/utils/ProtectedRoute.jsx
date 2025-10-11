import {useLocalStorage} from "react-use"
import {Outlet } from "react-router";
import ErrorPage from "../components/Error/ErrorPage";

const ProtectedRoute = () => {
    const [token, _] = useLocalStorage("token", "")

    return token ? <Outlet/> : <ErrorPage statusCode={404} message="User Not Found" describe="Udah jangan iseng buka dari url, mending lu login/daftar dulu dah" nameButton="Login" redirectLink="/login"/>

}
export default ProtectedRoute;