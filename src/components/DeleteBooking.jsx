import { FaTrashAlt } from 'react-icons/fa';

export default function DeleteBooking({id, setBookings}) {
    

  
          const handleDeleteBooking = async () => {
            console.log(id);
            const response = await fetch('https://roombookings-f0b23-default-rtdb.europe-west1.firebasedatabase.app/' + id + '/.json',
            { 
              method: 'DELETE', 
            })

            setBookings((presviousValue) => presviousValue.filter(booking => booking.id !== id));
          }

          
        
    return (
        <div>
            <button className="oversigtBtn" onClick={handleDeleteBooking}><FaTrashAlt /></button>
        </div>
    );
}