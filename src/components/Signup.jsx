import { useState } from "react";
import logo from "./img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowCircleLeft } from 'react-icons/fa';




function Signup(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isError, setIsError] = useState(false)


  const handleName = (event) => {
      setName(event.target.value);
  }
  const handleEmail = (event) => {
      setEmail(event.target.value);
  }
  const handlePassword = (event) => {
      setPassword(event.target.value);
  }


  const navigate = useNavigate();


    const handleSignup = async (event) => {
      event.preventDefault();
      
      // call firebase
      const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDz21OlUywuTLX_B3kB_Re7FITqBjx6W-E",
      { 
          method: 'POST',
          body: JSON.stringify({
              displayName: name,
              email: email,
              password: password,
              returnSecureToken: true,
          })
      }); 
      const result = await response.json();
      console.log(result);
      
      if(email == "" && password == "") {
        return setIsError(true)
      } else {
        props.setDisplayName(result.displayName)
        navigate("/Signin");
      };
  };


  return (
  <>
  <img src={logo} className="App-logo" alt="logo" />
  <div>
  <Link to="/Signin">
  <button className="backbtn"><FaArrowCircleLeft /></button>
        </Link>
    
    
  </div>
    <div className="signupcontainer">
      <h1>Sign up</h1>
      <form>
        <label>Fornavn og efternavn</label>
        <input type="text" placeholder='Fornavn og efternavn' onChange={handleName} required></input>
        <label>Email</label>
        <input type="email" placeholder='Email' onChange={handleEmail} required></input>
        <label>Kode</label>
        <input type="password" placeholder='Kode' onChange={handlePassword} required></input> 
        <button onClick={handleSignup} className="signupbutton">Opret bruger</button>
        { isError && <p className="errortext2">*Udfyld felterne</p>}
        </form>

    </div>
    </>
  );
}

export default Signup;
