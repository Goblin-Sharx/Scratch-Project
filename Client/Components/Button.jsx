import React from "react";
import ModalContainer from "../Containers/ModalContainer.jsx";


const Button = () => {


    const [modalIsOpen, setIsOpen] = React.useState(false);

    let neighborhoodId;
    let bio;

    const changeModalIsOpen = () => {
        setIsOpen(false);
    }

    const buttonClick = (event) => {
        setIsOpen(true);
        neighborhoodId = event.target.textContent;
        console.log(neighborhoodId)

    
        event.preventDefault();
        fetch('/api/bio', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "neighborhood": neighborhoodId })
          })
        .then((data) => {
          return data.json(); 
        })
        .then((data) => {
          console.log(data.bio);
        })
        .catch((err) => console.log('Error retrieving data from the server: ', err));
    };
    
    
    return (
        <>
            <div className="Neighborhood" id="Harlem"><button onClick={buttonClick}>Harlem</button></div>
            <div className="Neighborhood" id="GreenwhichVillage"><button onClick={buttonClick}>Greenwhich Village</button></div>
            <div className="Neighborhood" id="LowerEastSide"><button onClick={buttonClick}>LES</button></div>
            <div className="Neighborhood" id="Midtown"><button onClick={buttonClick}>Midtown</button></div>
            <div className="Neighborhood" id="UpperWestSide"><button onClick={buttonClick}>Upper West Side</button></div>
            <div className="Neighborhood" id="BedfordStuyvesant"><button onClick={buttonClick}>Bedford-Stuyvesant</button></div>
            <div className="Neighborhood" id="Williamsburg"><button onClick={buttonClick}>Williamsburg</button></div>
            <div className="Neighborhood" id="BrooklynHeights"><button onClick={buttonClick}>Brooklyn Heights</button></div>            
            <div className="Neighborhood" id="ConeyIsland"><button onClick={buttonClick}>Coney Island ↓</button></div>
            <div className="Neighborhood" id="Astoria"><button onClick={buttonClick}>Astoria</button></div>
            <div className="Neighborhood" id="ForestHills"><button onClick={buttonClick}>Forest Hills</button></div>
            <div className="Neighborhood" id="GrandConcourse"><button onClick={buttonClick}>Grand Concourse</button></div>
            <div className="Neighborhood" id="Morrisania"><button onClick={buttonClick}>Morrisania</button></div>
            <div className="Neighborhood" id="StatenIsland"><button onClick={buttonClick}>Staten Island</button></div>
            <ModalContainer bio={bio} modalIsOpen={modalIsOpen} changeModalIsOpen={changeModalIsOpen} neighborhoodId={neighborhoodId} />
        </>
    )
}

//move use state to this component and onclick pass down true or false


export default Button;