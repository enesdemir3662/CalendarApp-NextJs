import React from "react";
//npm install react-icons --save
import { RiCloseLine } from "react-icons/ri";
import toast from "react-hot-toast";

const Modal = ({ setEventModal, event, setEvents, events }) => {


  const deleteEvent = () => {
    setEventModal(false)
    const newEvents = events.filter((val) => {
      return event !== val;
    });
  toast.success("Başarılı");
  setEvents(newEvents);
  };

  return (
    <>
      <div className="darkBG" onClick={() => setEventModal(false)} />
      <div className="centered">
        <div className="modal_">
          <div className="modalHeader">
            <h5 className="heading"><p className="modal-title">Etkinlik</p></h5>
          </div>
          <button className="closeBtn" onClick={() => setEventModal(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="modalContent">
         <p className="modal-text">{event.title}</p> <br/> <p className="modal-text"></p><br/> <p className="modal-text">{event.start.toString()}</p><br/> <p className="modal-text">{event.end.toString()}</p>
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button className="Btn1" onClick={() => deleteEvent()}>
              Etkinliği Sil
              </button>
              <button
                className="Btn2"
                onClick={() =>  setEventModal(false)}>
                Kapat
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
