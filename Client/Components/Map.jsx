import React from 'react'
import background from '../../_assets/New-York-City-neighborhoods-blank resized.png'
import Button from './Button.jsx'


const Map = (props) => {

    return (
        <div> 
            <img className="bg" src={background}/> 
            <Button class="MapButton"/>
        </div>
    )
}
 

export default Map;