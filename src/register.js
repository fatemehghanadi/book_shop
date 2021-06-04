import { react } from '@babel/types';
import React from 'react';

import ReactDOM from 'react-dom';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import {
  BrowserRouter as Router ,
   Switch , 
   Route , 
   Link } from "react-router-dom";



class Register extends React.Component {
    render() {
      return (
        <Container style={{backgroundColor: "rgba(45, 5, 120, 80%)"  , borderRadius:"15%" , width: "80%" , fontSize: " 60%" , margin: "0%" , padding: "1%" ,  right:"10%"}}>
          
          <Router>
          <Link to="/"  style={{color: "white" , margin: "2%" }} onClick={() => {window.location.href="/"}} >
            خانه 
          </Link> {'   '}
          <Link  to="/signup" style={{color: "white" , margin: "2%" }} onClick={() => {window.location.href="/signup"}}>
            ثبت‌نام
          </Link> {'   '}
          <Link to="signin" style={{color: "white" , margin: "2%" }} onClick={() => {window.location.href="/signin"}}>
            ورود
          </Link>
  
          
    
    
          </Router>
  
        </Container>
  
      );
    }
  }
  export default Register;