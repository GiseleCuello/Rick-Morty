import { useState } from "react";
import validate from "./Validate"
import Style from './Form.module.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa'


const Form = ({Login}) => {
    const [userData, setUserData] = useState({
        email : "",
        password : "",
    })

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        let property = event.target.name;
        let value = event.target.value;
        setUserData({...userData, [property] : value})
       // validateUser({...userData, [property]: value}, setErrors);
       // validatePassword({...userData, [property]: value}, setErrors);
    }

    const handleBlur = (event) => {
        const {name, value} = event.target;
        setErrors(validate({...userData, [name]: value}))
    }

    
    
    const submitHandler = (event) => {
        event.preventDefault();
        Login(userData)

    }

    const [passwordShown, setPasswordShown] = useState(false);
    const verPassword = () => {
        setPasswordShown(!passwordShown);
    }

    return(
        <div class={Style.center}>
       
        <form onSubmit={submitHandler}>
            <div className={Style.inputbox}>
                <label htmlFor="email">Email</label>
                <input
                type="text"
                name="email"
                value={userData.email}
                onChange={handleChange}
                onBlur={handleBlur}
            
                />
                
            </div>
            <div className={Style.inputbox}>
                <label htmlFor="password">Password</label>
                <input
                type={passwordShown? "text" : "password"}
                name="password"
                value={userData.password}
                onChange={handleChange}
                onBlur={handleBlur}
                />
            <span onClick={verPassword} className="ver-password">
              {passwordShown ? <FaEye /> : <FaEyeSlash />}
            </span>            
            </div>
            {errors.password && (<p> {errors.password} </p>)}
            <div>
                <button className={`${Style.boton} ${Style["glow-on-hover"]}`} type="submit">Login</button>
            </div>
        </form>
        </div>
    )
}
        
export default Form;