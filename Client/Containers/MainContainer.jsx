import React from 'react';
import ModalContainer from './ModalContainer.jsx';
import axios from "axios";

const MainContainer = () => {
    const handleClick = () => {
      console.log('handledClick')
      fetch('/api')
      .then((data) => {
        return data.json(); 
        // when you first receive the response back, you MUST .json() the response
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log('Error retrieving data from the server: ', err));
    
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me!</button>
      <ModalContainer />
    </div>
  );
};

export default MainContainer;
