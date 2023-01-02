import { useEffect, useState } from "react";
import { transformToArray } from "../../firebase-utils";
import Undervisningslokaler from "./Undervisningslokaler";
import Spinner from "../atoms/Spinner";
import ErrorPage from "../ErrorPage";


const url =
  "https://mul-bookings-default-rtdb.europe-west1.firebasedatabase.app/.json";

export default function UndervisningsContent() {
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


      setRooms(asArray);

    } else {
      setIsError(true);
    }

      setIsLoading(false);
    }

    getData();
  }, []);

  return (
    <main>
      { isLoading && <Spinner /> }
      {isError && <ErrorPage />}
         <div className="grid-container">
       {rooms.map((room)=> {
            return <Undervisningslokaler 
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