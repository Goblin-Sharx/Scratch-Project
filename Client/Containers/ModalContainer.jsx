import React from 'react';
import Modal from 'react-modal';


const ModalContainer = (props) => {

    
    let subtitle;
    

   

    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }
    

    return (
        <div className="modalClass">
          {/* <button onClick={openModal}>Open Modal</button> */}
          <Modal
            isOpen={props.modalIsOpen}
            onAfterOpen={afterOpenModal}
            // onRequestClose={closeModal}
            contentLabel="Example Modal"
          >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
            <button onClick={props.changeModalIsOpen}>close</button>
            <div>I am a modal</div>
            <form>
              <input />
              <button>Hear me roar</button>
              <p>{props.bio}</p>
            </form>
          </Modal>
        </div>
    )
}


export default ModalContainer;