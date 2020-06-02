import React from "react";
import "./style.css"

function Section(props) {
    return (

        <div id={props.id} className={props.class} {...props} 
        style={{backgroundImage: `url(${props.image})`, 
        backgroundColor: `rgba(${props.red},${props.green},${props.blue},${props.alpha})`}}>
                {props.children}
        </div>

    )
}

export default Section;

