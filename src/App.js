import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Section from './components/Section/';
import Profile from "./components/Profile";
import profile1 from "./images/profile1.jpg";
import Card from "./components/Card";
import Row from "./components/Row";
import Col from "./components/Col";
import Project from "./components/Project"
import Navbar from "./components/Navbar";
import projectImage from "./images/propertyhunter.png";
import projectImage2 from "./images/codequiz.png";
import projectImage3 from "./images/wmp.png";
import projectImage4 from "./images/employeeTracker.gif";
import projectImage5 from "./images/budget.png";
import projectImage6 from "./images/societe.png";
import background1 from "./images/background1.jpg";
// import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
var ReactRotatingText = require('react-rotating-text');




function App() {

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);

};

useEffect(() => {

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };

    

}, []);


if(scrollPosition < 1100) {
  // scroll.scrollTo(1101)
 
}

  
  return (
    <div className="App">
            <Router>
            <Navbar/>

            <Section 
            image={background1}
            class="hero hero0"
            >

            <Col size="md-12">
              <Profile profile={profile1}/>
            </Col>
            <h1
            >
              <ReactRotatingText 
              color={"white"}
              items={['Tori Bromma', 'Full-Stack Web Developer', 'Welcome to my Page']} 

              />
            </h1>
            
            <h2 className="m-5 resume"><a rel="noopener noreferrer"  href="https://docs.google.com/document/d/1Q0jXdWVesqziTQG1LJKpO_Vp0rj5ddrC/edit" target="_blank">PDF link to my Resume</a></h2>
            {/* <h1><a rel="noopener noreferrer"  href="https://docs.google.com/document/d/1Q0jXdWVesqziTQG1LJKpO_Vp0rj5ddrC/edit" target="_blank"><i class="far fa-file-pdf"></i></a></h1> */}

            <div className="m-5">
            <Row>
              <Col size="md-4">
                  <a target="_blank" href="mailto:toribromma@gmail.com" rel="noopener noreferrer" className="p-3"><i class="far fa-envelope fa-7x"></i></a>
              </Col>
              <Col size="md-4">
                  <a rel="noopener noreferrer"  className="p-3" href="http://linkedin.com/in/toribromma" target="_blank"><i class="fab fa-linkedin fa-7x"></i></a>
              </Col>
              <Col size="md-4">
                  <a rel="noopener noreferrer"  href="https://github.com/toritheterrible" target="_blank"><i class="fab fa-github-square fa-7x"></i></a>
              </Col>
              <Col size="md-12">
                  <h5 className="mt-3">(714) 702 - 0401</h5>
              </Col>
            </Row>
            </div>
            </Section>
            

            <Section 
            class="hero hero1"
            red={255} 
            green={215} 
            blue={118} 
            alpha={0.8}
            id="section1"
            >
            <h1 className="second">Skills</h1>
            <Row>

            <Col size="md-6">
            <i className="fab fa-html5 fa-7x"></i>
            <div className="language">HTML</div>
            </Col>
            <Col size="md-6">
            <i className="fab fa-css3-alt fa-7x"></i>
            <div className="language">CSS, Bootstrap, UIKit, Material UI</div>
            </Col>
            <Col size="md-12">
            <i className="fab fa-react fa-7x fa-spin"></i>
            <div className="language">React, Redux, Hooks</div>
            </Col>
            <Col size="md-6">
            <i className="fab fa-node-js fa-7x"></i>
            <div className="language">Node and Express</div>
            </Col>
            <Col size="md-6">
            <i className="fas fa-database fa-7x"></i>
            <div className="language">MySQl and Mongo</div>
            </Col>
           </Row>
            </Section>

            <Section
            class="hero hero2"
            red={85} 
            green={107} 
            blue={47} 
            alpha={0.8}
            id="section2"
            >  
            <h1 className="third">Projects</h1>
            
                <Row>
                  <Col size="xl-4 md-6">
                    <Card projectImage={projectImage}>
                      <Project
                        linkGitHub="https://github.com/toritheterrible/project2" 
                        linkDeployed="https://propertyhunter90.herokuapp.com/" 
                        title="Property Hunter"
                      />
                    </Card>
                  </Col>
                    <Col size="xl-4 md-6">
                    <Card projectImage={projectImage2}>
                      <Project
                        linkGitHub="https://github.com/toritheterrible/codingQuiz" 
                        linkDeployed="https://toritheterrible.github.io/codingQuiz/" 
                        title="Code Quiz"
                      />
                    </Card>
                  </Col>
                    <Col size="xl-4 md-12">
                    <Card projectImage={projectImage3}>
                      <Project
                      linkGitHub="https://github.com/hollyisaredhead/Weekly-meal-planner" 
                      linkDeployed="https://hollyisaredhead.github.io/Weekly-meal-planner/" 
                      title="Weekly Meal Planner"
                      />
                    </Card>
                  </Col>

                </Row>

                <Row>
                  <Col size="xl-4 md-6">
                    <Card projectImage={projectImage4}>
                      <Project
                      linkGitHub="https://github.com/toritheterrible/employeeTracker" 
                      linkDeployed="https://github.com/toritheterrible/employeeTracker/blob/master/employeeTracker.gif" 
                      title="Employee Tracker"
                      />
                    </Card>
                    </Col>
                    <Col size="xl-4 md-6">
                    <Card projectImage={projectImage5}>
                      <Project
                      linkGitHub="https://github.com/toritheterrible/Online-Offline-Budget-Trackers" 
                      linkDeployed="https://budgettrackeroffline90.herokuapp.com/" 
                      title="PWA Budget Tracker"
                      />
                    </Card>
                    </Col>
                    <Col size="xl-4 md-6">
                    <Card projectImage={projectImage6}>
                      <Project
                      linkGitHub="https://github.com/BrianHdz/Project-3" 
                      linkDeployed="https://polar-brushlands-16053.herokuapp.com/" 
                      title="Media Aggregator"
                      />
                    </Card>
                    </Col>
                </Row>
            </Section>
            </Router>

    </div>
  );
}

export default App;
