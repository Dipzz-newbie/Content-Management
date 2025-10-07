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
        title: "Upss",
        text: massage
        
    })
}

 export const alertConfirm = async(massage) => {
    const result = await Swal.fire({
        icon:"question",
        title: "Are You Sure?",
        text: massage,
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: '#3085d5',
        confirmButtonText: "Yes"
        
    })
    return result.isConfirmed;
}