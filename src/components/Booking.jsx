import '../App.css';
import TheHeader from './TheHeader';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";



function Booking({token, displayName}) {
  const navigate = useNavigate();

// Tjek om token er "forkert"(dvs. er den der, eller er den der ikke). 
  // Hvis den ikke er der, så navigate til signin
useEffect(() => {
  if(token == "") {
    navigate("/Signin");
  } 
}, [])
  
  return (
    <div>
      <TheHeader displayName={displayName} />
      <Navbar />
    </div>
  );
}

export default Booking;
