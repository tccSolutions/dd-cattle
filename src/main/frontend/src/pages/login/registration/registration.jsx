import { Field, Form, Formik } from "formik"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../../api/ApiService";



export default function RegistrationPage(){
    const [errors, setErrors] =useState([]);
    const nav = useNavigate()
    const user ={
        firstName:"",
        lastName:"",
        email:"",
        password:""
        
    }

    const validation =(user)=>{
       let errors = [];
       if(!user.firstName || !user.lastName){
        errors.push("Name fields are required")
       }
       if(!user.email){
        errors.push("Email Field is required")
       }
       if(user.password.length < 8){
        errors.push("Password must be at least 8 characters long.")
       }
        if(user.password1 !== user.password){
            errors.push("Passwords Do Not Match")
           setErrors(errors);
           return false;
        }
        else{
            return true;
        }
        setErrors(errors)
    }



    const onSubmit=async (values)=>{
        if(validation(values)){
            let user = {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                password: values.password
            }
            

            await register(user)
                .then(res=>{
                    if(res.data.token === null){
                        setErrors(["Email already exists"])
                    }else{
                        nav("/")
                    }
                   
                })
                .catch(err=> setErrors[err])
        }
        
    }

    return(
        <Formik initialValues={user} onSubmit={onSubmit}>
        {(props)=>(
            <Form className="dark-shadow col-lg-6 row mx-auto text-start my-auto" style={{height:"25%"}}>
                <div className="mb-3 text-center border-bottom">
                    <h3>Registration</h3>
                    {errors.map(error=>(
                        <p key={error} className="alert alert-danger">{error}</p>
                    ))}
                </div>
                <div className="col-lg-6 mb-3">
                    <label htmlFor="firstName">First Name:</label>
                    <Field type="text" name="firstName" className="form-control"/>
                </div>
                <div className="col-lg-6 mb-3">
                    <label htmlFor="lastName">Last Name:</label>
                    <Field type="text" name="lastName" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email">Email:</label>
                    <Field type="email" name="email" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password">Password:</label>
                    <Field type="password" name="password" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password">Confirm Password:</label>
                    <Field type="password" name="password1" className="form-control" />
                </div>
                <div className="col-lg-6 mb-3">                    
                    <button type="submit"   className="btn btn-success w-100"> Create</button>
                </div> 
                <div className="col-lg-6 mb-3">                    
                    <button type="button"   className="btn btn-danger w-100"> Cancel</button>
                </div>  
                <Link to="/login">Already Have An Account?</Link>                 
            </Form>
        )}
        </Formik>
    )
}