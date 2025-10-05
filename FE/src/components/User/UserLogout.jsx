import { useEffectOnce, useLocalStorage } from "react-use";
import { userLogout } from "../../lib/api/UserAPi";
import { alertError, alertSuccess } from "../../lib/alert";
import { useNavigate } from "react-router";


const UserLogout = () => {
    const [token, setToken] = useLocalStorage("token","");
    const navigate = useNavigate()
 
    const handleLogout = async() => {
        const response = await userLogout(token);
        const responseBody = await response.json();
        console.log(responseBody)
        if (response.status === 200){
            setToken("")
            await navigate({
                pathname:"/login"
            })
        }else{
            await alertError(responseBody.errors)
        }
    }

    useEffectOnce(()=>{
        handleLogout()
    })
    return <>

    </>
}

export default UserLogout;