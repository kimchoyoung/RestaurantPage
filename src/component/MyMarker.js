import React, { Component } from 'react';
import {FaMapMarkerAlt} from 'react-icons/fa'
import {IconContext} from 'react-icons'

const MyMarker = (props) =>{
    const greater = props.$hover? "4em":"2em";

    return(
        <IconContext.Provider value={{color:props.point, size:greater}}>
            <div>
                <FaMapMarkerAlt />
            </div>
        </IconContext.Provider>
    )
}


export default MyMarker;
