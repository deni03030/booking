import {useState} from "react";
import Booking from "./Booking";
import { Routes, Route } from "react-router-dom";
import Signup from './Signup';
import Signin from "./Signin";



export default function Routing() {
  const [token, setToken] = useState("");
  const [displayName, setDisplayName] = useState("");

    return (
      <div>
        <Routes>
          <Route path="/" >
          <Route index element={<Signin token={token} setToken={setToken} setDisplayName={setDisplayName}/>} />
          <Route path="Signin" element={<Signin token={token} setToken={setToken} setDisplayName={setDisplayName}/>} />
            <Route path="Signup" element={<Signup displayName={displayName} setDisplayName={setDisplayName} />} />

            <Route path="Booking" 
            element={
            <Booking token={token} displayName={displayName} />
            } 
            />
          
          </Route>
        </Routes>
      </div>
  );
}