import bag from "../assets/movies";
import React from 'react';
function Card({slug , content , status}) {
    let num = Math.floor(Math.random()*bag.length);
    return (
        <>
            <div className="card">
                <img src={bag[num].movieUrl} alt="sample data" />
                <div className="text-box">
                    <h2 className="md-heading capitalize">{slug}</h2>
                    <p className="small-text light-weight smaller-text">{content.slice(0 , 105) + " ...."}</p>
                    <button className="btn smaller-text">{status}</button>
                </div>
            </div>
        </>
    );
}

export default Card;