import React, { useState, useEffect } from 'react';
import './App.css';
// import Nav from "./components/Nav"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Section from './components/Section/';
import Profile from "./components/Profile";
import background1 from "./images/arch.jpg";
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
import projectImage6 from "./images/societe.png"

var ReactRotatingText = require('react-rotating-text');
var Scroll = require('react-scroll');
var Events = Scroll.Events;

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


if(scrollPosition > 1100) {
  Events.scrollEvent.register('begin', function(to, element) {
    console.log("begin", to, element);
  });
}
  
  
  return (
    <div className="App">
            <Router>
            <Navbar/>

            <Section 
            // image={background1}
            class="hero hero0"
            >

            <Col size="md-12">
              <Profile profile={profile1}/>
            </Col>
            <h1
            >
              <ReactRotatingText 
              items={['Tori Bromma', 'Full-Stack Web Developer', 'Welcome to my Page']} 

              />
            </h1>
            
            <h1 className="text-center mb-5"><a rel="noopener noreferrer"  href="https://docs.google.com/document/d/1Q0jXdWVesqziTQG1LJKpO_Vp0rj5ddrC/edit" target="_blank">Here is a PDF link to my Resume</a></h1>
            {/* <h1><a rel="noopener noreferrer"  href="https://docs.google.com/document/d/1Q0jXdWVesqziTQG1LJKpO_Vp0rj5ddrC/edit" target="_blank"><i class="far fa-file-pdf"></i></a></h1> */}
            
            <Row>
              <Col size="md-12">

                  <a target="_blank" href="mailto:toribromma@gmail.com" rel="noopener noreferrer" className="p-3"><i class="far fa-envelope fa-7x"></i></a>
                  <a rel="noopener noreferrer"  className="p-3" href="http://linkedin.com/in/toribromma" target="_blank"><i class="fab fa-linkedin fa-7x"></i></a>
                  <a rel="noopener noreferrer"  href="https://github.com/toritheterrible" target="_blank"><i class="fab fa-github-square fa-7x"></i></a>
                  <h5 className="mt-3">(714) 702 - 0401</h5>

              </Col>
            </Row>

            </Section>
            

            <Section 
            class="hero hero1"
            red={255} 
            green={197} 
            blue={108} 
            alpha={1}
            id="section1"
            >
            <h1 className="second">My Skills</h1>
            <Row>
              <Col size="md-12">
            <i class="fab fa-html5 fa-7x"></i>
            <i class="fab fa-css3-alt fa-7x"></i>
            <i class="fab fa-react fa-7x fa-spin"></i>
            <i class="fab fa-node-js fa-7x"></i>
            <i class="fas fa-database fa-7x"></i>
            </Col>
            </Row>
            </Section>

            <Section
            class="hero hero2"
            red={0} 
            green={58} 
            blue={111} 
            alpha={0.8}
            id="section2"
            >  
            <h1 className="third">My Projects</h1>
            
                <Row>
                  <Col size="xl-3"/>
                  <Col size="xl-2 md-6">
                    <Card projectImage={projectImage}>
                      <Project
                        linkGitHub="https://github.com/toritheterrible/project2" 
                        linkDeployed="https://propertyhunter90.herokuapp.com/" 
                        title="Property Hunter"
                      />
                    </Card>
                  </Col>
                    <Col size="xl-2 md-6">
                    <Card projectImage={projectImage2}>
                      <Project
                        linkGitHub="https://github.com/toritheterrible/codingQuiz" 
                        linkDeployed="https://toritheterrible.github.io/codingQuiz/" 
                        title="Code Quiz"
                      />
                    </Card>
                  </Col>
                    <Col size="xl-2 md-12">
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
                  <Col size="xl-3"/>
                  <Col size="xl-2 md-6">
                    <Card projectImage={projectImage4}>
                      <Project
                      linkGitHub="https://github.com/toritheterrible/employeeTracker" 
                      linkDeployed="https://github.com/toritheterrible/employeeTracker/blob/master/employeeTracker.gif" 
                      title="Employee Tracker"
                      />
                    </Card>
                    </Col>
                    <Col size="xl-2 md-6">
                    <Card projectImage={projectImage5}>
                      <Project
                      linkGitHub="https://github.com/toritheterrible/Online-Offline-Budget-Trackers" 
                      linkDeployed="https://budgettrackeroffline90.herokuapp.com/" 
                      title="PWA Offline-Online Budget Tracker"
                      />
                    </Card>
                    </Col>
                    <Col size="xl-2 md-4">
                    <Card projectImage={projectImage6}>
                      <Project
                      linkGitHub="https://github.com/BrianHdz/Project-3" 
                      linkDeployed="https://polar-brushlands-16053.herokuapp.com/" 
                      title="Media Aggregator entitled Societe"
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
