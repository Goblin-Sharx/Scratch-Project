import React from 'react'
import background from '../../_assets/New-York-City-neighborhoods-blank resized.png'
import Button from './Button.jsx'


const Map = (props) => {

    return (
        <div style={{backgroundImage: `url(${background})`}} className="bg">

            <Button />

        </div>
    )
}
 

export default Map;