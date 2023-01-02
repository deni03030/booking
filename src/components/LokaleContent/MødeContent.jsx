import { useEffect, useState } from "react";
import { transformToArray } from "../../firebase-utils";
import Mødelokaler from "./Mødelokaler";
import Modal from "react-modal";
import Spinner from "../atoms/Spinner";
import ErrorPage from "../ErrorPage";


const url =
  "https://meetingrooms-5ad65-default-rtdb.europe-west1.firebasedatabase.app/.json";

export default function RoomContent() {

  const [modalIsOpen, setModalIsOpen] = useState(false);

    const [rooms, setRooms] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    const [isError, setIsError] = useState(false);

    const openModal = () => {
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };
  

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
      setIsError(false);
    }

      setIsLoading(false);
    }
    getData();

    
  }, []);

  return (
    <main>
       <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
       contentLabel="Create booking form"
      >
        </Modal>
        { isLoading && <Spinner /> }
        {isError && <ErrorPage />}
      <div className="grid-container">
        {rooms.map((room)=> {
            return <Mødelokaler 
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