import React from 'react'
import background from '../../_assets/New-York-City-neighborhoods-blank resized.png'


const Map = (props) => {

    return (
        <div style={{backgroundImage: `url(${background})`}} className="bg">
            <button className="Harlem">button</button>

        {/* <img className="bg"/>  */}
        </div>
    )
}
 

export default Map;