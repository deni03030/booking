import { useState } from "react";
import UndervisningsContent from "./LokaleContent/UndervisningsContent";
import MødeContent from "./LokaleContent/MødeContent";
import AlleContent from "./LokaleContent/AlleContent";


export default function Navbar () {

    const [showRoom, setShowRoom] = useState("Alle");

    // conditional styling
    const styles = {
        popup:{
          color: showRoom === "Alle" ? "orange" : "",
        }
      };
    const styles2 = {
        popup:{
          color: showRoom === "Undervisningslokaler" ? "orange" : "",
        }
      };
    const styles3 = {
        popup:{
          color: showRoom === "Mødelokaler" ? "orange" : "",
        }
      };
  
   
    return (

        <>
        <div>
            <ul className="navbar">
                <li>
                    <a className="btn" style={styles.popup} onClick={() => setShowRoom("Alle")}>Alle</a>
                </li>
                <li>
                    <a className="btn" style={styles2.popup} onClick={() => setShowRoom("Undervisningslokaler")}>Undervisningslokaler</a>
                    
                </li>
                <li>
                    <a className="btn" style={styles3.popup} onClick={() => setShowRoom("Mødelokaler")}>Mødelokaler</a>
                </li>
                
            </ul>
        </div>
        <div>

        

        {showRoom === "Alle" && <AlleContent />}
        {showRoom === "Mødelokaler" && <MødeContent />}
        {showRoom === "Undervisningslokaler" && <UndervisningsContent />}
        </div>
        
        </>
    )
}