import logo from './img/logo.png'
import Modal from "react-modal";
import { useState } from "react";
import BookingForm from './BookingForm';
import Oversigt from './Oversigt';
import Signout from './Signout';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


export default function TheHeader( {displayName} ) {
    
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalIsOpen2, setModalIsOpen2] = useState(false);
   
    const openModal = () => {
        setModalIsOpen(true);
      };
    
      const closeModal = () => {
        setModalIsOpen(false);
      };
    const openModal2 = () => {
        setModalIsOpen2(true);
      };
    
      const closeModal2 = () => {
        setModalIsOpen2(false);
      };

      const navRef = useRef();

      const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
      };
    
      return (
        <>
        <header>
                      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Create booking form"
      >
        <span class="close" onClick={closeModal}>&times;</span>
        <BookingForm closeModal={closeModal}  displayName={displayName}  />
      </Modal>
      <Modal
        isOpen={modalIsOpen2}
        onRequestClose={closeModal2}
        contentLabel="Create booking form"
        >
          <span class="close" onClick={closeModal2}>&times;</span>
            <Oversigt />
            </Modal>
            <img className="App-logo" src={logo} alt="logo" />
            <nav ref={navRef}>
            <a className='BookBtn' onClick={openModal}>Book nu</a>
            <a className='oversigt' onClick={openModal2}>Min oversigt</a>
            <a><Signout/></a>
            <button
              className="nav-btn nav-close-btn"
              onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
          <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>
        </header>
        <div className='lokale'>
        <h1>Lokale information</h1>
    </div>
    </>
      );
    }

