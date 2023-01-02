//Log in page

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./img/logo.png";

 // Hvis der ER en token, så´navigate til Booking
    // props.token

export default function Signin(props) {
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
//Error massages
    const [isError, setIsError] = useState(false)
    const [isError1, setIsError1] = useState(false)



    const handleEmail = (event) => {
      setEmail(event.target.value);

  }
  const handlePassword = (event) => {
      setPassword(event.target.value);
  }

  const navigate = useNavigate();

    const handleSignin = async (event) => {
      event.preventDefault();
      
      // call firebase
      const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDz21OlUywuTLX_B3kB_Re7FITqBjx6W-E",
      { 
          method: 'POST',
          body: JSON.stringify({
              email: email,
              password: password,
              returnSecureToken: true,
    
          })  
      }); 
      const result = await response.json();
      console.log(result);

     if (email == "" && password == "") {
        return setIsError1(true)
        }
      else if(result.error) {
        return setIsError(true)
      } 
    
      else {
        props.setDisplayName(result.displayName)
        props.setToken(result.idToken)
        navigate("/Booking");
      } 
    };
  
  const [message, setMessage] = useState('Hello World');

      
return (
  <>
  <img src={logo} className="App-logo" alt="logo" />
    <div className="logincontainer">

      <h1>Log ind</h1>
      <form>
        <label>Email</label>
        
        <input type="email" placeholder='Email' onChange={handleEmail} required></input>
        
        <label>Kode</label>
        
        <input type="password" placeholder='Kode' onChange={handlePassword} required></input>
      
          <button className="loginbtn" onClick={handleSignin}>Log ind</button>

        <Link to="/Signup">
          <button className="signup">Sign up</button>
        </Link>
      </form>
    </div>
    <div>
    { isError && <p className="errortext">*Forkert email eller kode</p>}
    { isError1 && <p className="errortext">*Husk at udfylde </p>}
    
    </div>
    </>
  );
};
