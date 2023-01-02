import { useEffect, useState } from "react";
import { transformToArray } from "../firebase-utils";
import OversigtIndhold from "./OversigtIndhold";
import Spinner from "./atoms/Spinner";
import ErrorPage from "./ErrorPage";


const url =
  "https://roombookings-f0b23-default-rtdb.europe-west1.firebasedatabase.app/.json";

export default function RoomContent() {
    const [bookings, setBookings] = useState([]);
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
      console.log(asArray);
      setBookings(asArray);

    } else {
      setIsError(false);
    }
      
      setIsLoading(false);
    }

    getData();
  }, []);

  return (
    <main>
      
        <div className="oversigtTitle">
            <h2>Lokale</h2>
            <h2>Navn</h2>
            <h2>Dato</h2>
            <h2>Tid</h2>
        </div>
        {isLoading && <Spinner /> }
        {isError && <ErrorPage />}
   {bookings.map((booking) => {
        return <OversigtIndhold date={booking.date} room={booking.room} name={booking.name} time={booking.time} id={booking.id} setBookings={setBookings} />;
      })}
    </main>
  );
}