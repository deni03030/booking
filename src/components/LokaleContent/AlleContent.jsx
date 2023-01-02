import { useEffect, useState } from "react";
import { transformToArray } from "../../firebase-utils";
import AlleLokaler from "./AlleLokaler";
import Spinner from "../atoms/Spinner";
import ErrorPage from "../ErrorPage";


const url =
  "https://mul-bookings-default-rtdb.europe-west1.firebasedatabase.app/.json";

const url2 =
  "https://meetingrooms-5ad65-default-rtdb.europe-west1.firebasedatabase.app/.json";

export default function RoomContent() {
    const [rooms, setRooms] = useState([]);


    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    

  useEffect(() => {

    setIsLoading(true);

    // Håndtere async logik/kode
    async function getData() {
      // Vi laver vores fetch kald, og får et http response fra vores firebase
      const response = await fetch(url);
      if (response.status == 200) {
      
      // Vi får body ud af det http response
      const body = await response.json();
      // Vi laver det mærkelige firebase object om til et array.
      const asArray = transformToArray(body);

      const response2 = await fetch(url2);
      // Vi får body ud af det http response
      const body2 = await response2.json();
      // Vi laver det mærkelige firebase object om til et array.
      const asArray2 = transformToArray(body2); 
      setRooms([...asArray, ...asArray2]);

    } else {
      setIsError(false);
    }
      setIsLoading(false);
    }

    getData();
  }, []);

  useEffect(() => {
  }, [rooms])

  return (
    <main>
      
      { isLoading && <Spinner /> }
      {isError && <ErrorPage />}
         <div className="grid-container">
       {rooms.map((room)=> {
            return <AlleLokaler 
            room={room.room} 
            description={room.description} 
            plug={room.plug} 
            sun={room.sun}
            people={room.people}
            projector={room.projector}
            id={room.id}
            />
          
           
        })}
        
        </div>
    </main>
  );
}