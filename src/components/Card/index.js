import React from "react";
import "./style.css"

function Card(props) {
    return (
        <div className="card mb-4 size">
            <img class="card-img-top" src={props.projectImage} alt="Card image cap"/>
            <div class="card-body">
                {props.children}
            </div>
        </div>
    )
}

export default Card;