//Sign out page
import { Link } from "react-router-dom";
import { FaSignOutAlt } from 'react-icons/fa';



export default function Signout() {


   
    return (
        <Link to="/Signin">
          <button className="signout"><FaSignOutAlt /></button>
        </Link>
    )
}