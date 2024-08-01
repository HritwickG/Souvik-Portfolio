import React, { useEffect, useState } from 'react'
import styles from "./auth.module.scss"
import registerImg from "../../assets/register.png"
import Card from '../../components/card/Card'
import { Link, useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'
import { validateEmail } from '../../utils'
import {useDispatch, useSelector} from "react-redux"
import { register } from '../../redux/features/auth/authSlice'
import {RESET_AUTH} from '../../redux/features/auth/authSlice'

import Loader from '../../components/loader/Loader'

const initialState={
    name:"",
    email:"",
    phone:"",
    password:"",
    cPassword:"",
}

const Register = () => {

   const[formData,setFormData] = useState(initialState)
   const {name,email,phone,password,cPassword} = formData;
  

   const dispatch = useDispatch();
   const navigate = useNavigate();
   const{isLoading,isLoggedIn,isSuccess} = useSelector((state) =>state.auth)

   const handleInputChange = (e) =>{
    const {name,value}= e.target
    setFormData({...formData,[name] : value})

   }

    const registerUser= async (e) => {
        e.preventDefault();
        if (!email ||!phone || !password) {
            return toast.error("All feilds are require")
        }
        if (password.length < 6) {
            return toast.error("Password must be up to 6 cherecter")
        }
        if (!validateEmail(email)) {
            return toast.error("Please enter a valid email")
        }
        if (password !==cPassword) {
            return toast.error("Password is not match")
        }

        const userData = {
            name,
            email,
            phone,
            password,
        }
        await dispatch(register(userData))
    }

        useEffect(() =>{
            if(isSuccess && isLoggedIn){
                navigate("/")
            }

            dispatch(RESET_AUTH())
        },[isSuccess, isLoggedIn,dispatch,navigate])
    return (
    <>

        {isLoading && <Loader/>}
    <section className={`container ${styles.auth}`}>
       
        <Card>
            <div className={styles.form}>
                <h2>Register</h2>
                <form  onSubmit={registerUser}>
                <input
                type="text"
                placeholder="Name"
                required
                name="name"
                value={name}
                onChange={handleInputChange}
               />
               <input
                type="text"
                placeholder="Email"
                required
                name="email"
                value={email}
                onChange={handleInputChange}
               />
               <input
                type="text"
                placeholder="Phone No"
                required
                name="phone"
                value={phone}
                onChange={handleInputChange}
               />
                <input
                type="password"
                placeholder="Password"
                required
                name={"password"}
                value={password}
                onChange={handleInputChange} 
               />
               <input
                type="password"
                placeholder="Confirm Password"
                required
                name={"cPassword"}
                value={cPassword}
                onChange={handleInputChange} 
               />
               <button type="submit" className="--btn --btn-primary --btn-block">
                Register
               </button>
               </form>
               <span className={styles.register}>
                <p>Go to the Home Page!!</p>
                <Link to="/">--Home--</Link>
               </span>

            </div>
        </Card>
        <div className={styles.img}>
            <img src={registerImg} alt="Login" width="400" />
        </div>
       
    </section>

    </>
    )
}


export default Register;
