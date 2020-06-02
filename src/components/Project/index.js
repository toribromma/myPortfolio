import React from "react";
import ListItem from "../ListItem";
import List from "../List";


function Project(props) {
    return(

            <List>
              <ListItem>
              <h4 className="text-light">{props.title}</h4>
              </ListItem>
              <ListItem>
              <button className="btn"><a rel="noopener noreferrer" target="_blank" href={props.linkDeployed}>Deployed Version</a></button>
              </ListItem>
              <ListItem>
              <button className="btn"><a rel="noopener noreferrer" target="_blank" href={props.linkGitHub}>Link to Github</a></button>
              </ListItem>
            </List>

    )
}

export default Project;
