const regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const regexNum = /\d/;

const validate = (userData) => {

    const errors = {}

    if (!userData.email) errors.email = "El email es requerido"
    else if (!regexMail.test(userData.email)) errors.email = "El email es inválido"
    else if(userData.email.length > 35) errors.email = "Email no puede tener más de 35 caracteres";

    else if (!userData.password) errors.password = "La contraseña es requerida"
    else if (!regexNum.test(userData.password)) errors.password = "La contraseña debe tener al menos 1 numero"

    /*
    let errors = {
        email: "El email es requerido"
    }
    */
    return errors 

}

export default validate;


// export const validateUser = (userData, setErrors, errors) => {
// if(!userData.email) setErrors({...errors, email : "Ingrese email"});
// else if(userData.email.length > 35) {
//     setErrors({ ...errors, email: "Email no puede tener más de 35 caracteres" });
// }else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.email)) setErrors({...errors, email : ""});
//   else { setErrors({...errors, email : "Email incorrecto"});
//   }
// }


// export const validatePassword = (userData, setErrors, errors) => {
//     if(!userData.password) setErrors({...errors, password : "Ingrese password"});
//     else{
//         if(/^(?=.*[0-9])(?=.*[a-z]){6,10}$/.test(userData.password)) setErrors({...errors, password:""});
//         else setErrors({...errors, password:""});
//     }
// }
