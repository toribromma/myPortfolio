import React from "react";
import Col from "../Col/";
import Row from "../Row";
import ListItem from "../ListItem";
import List from "../List";


function Project(props) {
    return(
    <Row>
          <Col size="md-4 ">
            </Col>
            <Col size="md-4">
            <img  style={{width:300}} alt="" src={props.projectImage}></img>
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
            </Col>

          </Row>
    )
}

export default Project;
