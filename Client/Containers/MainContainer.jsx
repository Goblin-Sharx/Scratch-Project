import React from 'react';
// import ModalContainer from './ModalContainer.jsx';
import Map from '../Components/Map.jsx';


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
      <div className="bg">
      <Map />
      </div>
  );
};

export default MainContainer;
