import { useLocalStorage } from "react-use";
import { useAuthRedirect } from "../validation/ValidationUsersLogin";

const Index = () => {
    const [token, setToken] = useLocalStorage("token", "") 
    useAuthRedirect(token);
}

export default Index;