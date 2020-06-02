import React from "react";
import "./style.css";

function Profile(props) {
    return (
         
    <img alt="profile" className="rounded-circle mb-4" src={props.profile} />
    )
}

export default Profile;