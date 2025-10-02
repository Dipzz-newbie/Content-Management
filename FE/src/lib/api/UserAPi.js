export const userRegister = async ({username, password, name}) => {
    return await fetch(`${import.meta.env.VITE_API_PATH}/users`, {
        method: "POST",
        headers: {
            "Content-type" : "applications/json",
            "Accept" : "applications/json",
        },
        body:JSON.stringify({
            username,
            password,
            name
        })
    })
}