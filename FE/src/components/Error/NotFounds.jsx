import { useLocalStorage } from "react-use";
import ErrorPage from "./ErrorPage";


const NotFounds = () => {
    const [token, _] = useLocalStorage("token",  "")
    return !token ? <ErrorPage statusCode={404} message="Page Not Found" describe ="The page you are looking for doesn't exist or has been moved." nameButton="Back To Login" redirectLink="/login"/> : <ErrorPage statusCode={404} message="Page Not Found" describe ="The page you are looking for doesn't exist or has been moved." nameButton="Back To Page" redirectLink="/dashboard/contacts"/>
}

export default NotFounds;