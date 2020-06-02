import React from "react";
import "./style.css"

function List(props) {
    return (
        <ul className="list-group">
         {props.children}
        </ul>
    )
}

export default List;