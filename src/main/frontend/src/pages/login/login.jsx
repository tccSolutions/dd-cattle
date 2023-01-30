import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../api/AuthContext";




export default function LoginPage({message}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState();
    const auth = useAuth();
    const nav = useNavigate();
   

    const handleEmail =(event)=>{
        setEmail(event.target.value)
    }
    const handlePassword = (event)=>{
        setPassword(event.target.value)
    }
    const onSubmit = async() =>{        
        console.log(email, password)
      if(await auth.login(email, password)){
        nav("/");
      } else{
        setErrorMessage("Invalid Username or Password")
      }     
    }

    return (
        <div className="container text-start my-auto ">
            <form className="row " method="post">
                <div className=" row col-lg-6 mx-auto dark-shadow">
                    <div className="text-center border-bottom border-1">
                        <h4>{message}</h4>
                        {errorMessage && <h6>{errorMessage}</h6>}
                    </div>
                    <div className=" col-lg-7 mx-auto mb-2 p-3">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control" name='email' onChange={handleEmail}/>
                    </div>
                    <div className=" col-lg-7 mx-auto mb-3">
                        <label htmlFor="password">Password:</label>
                        <input type="password" className="form-control" name='password' onChange={handlePassword} />
                    </div>
                    <div className="col-lg-6 mx-auto mb-3">
                        <button className="btn btn-primary w-100" type="button" onClick={onSubmit}>Login</button>
                    </div>
                </div>
            </form>


        </div>
    )
}