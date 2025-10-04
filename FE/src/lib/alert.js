import Swal from "sweetalert2"

 export const alertSuccess = async(massage) => {
    return Swal.fire({
        icon:"success",
        title: "Success",
        text: massage
        
    })
}

 export const alertError = async(massage) => {
    return Swal.fire({
        icon:"error",
        title: "Error",
        text: massage
        
    })
}