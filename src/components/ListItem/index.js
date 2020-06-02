import React from "react";
import "./style.css"

function ListItem(props) {
    return (
    <li className="list-group-item">{props.children}</li>
    )
}

export default ListItem;