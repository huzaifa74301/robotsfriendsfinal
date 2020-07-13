// this file gives the structure of the card
import React from 'react'
import './card.css';

const card = (props) => {
    const{name,email,id}=props;
    // we gave the name,email and id a specific property 
   
    return(
        <div className="card">
            <img alt='robots'src={`https://robohash.org/ ${id}`}></img>
            {/* by doing this $ sign thing i can get random images from the site */}
            <div class="info">
    <h2>{name}</h2>
    <p>{email}</p>
            </div>
        </div>
    );
}
export default card