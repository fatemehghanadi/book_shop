import React from 'react';

import Dastan_irani from "./assets/pics/dastan-irani.PNG";
import Dastan_khareji from "./assets/pics/dastan-khareji.PNG";
import Psy from "./assets/pics/psy.PNG";
import Landing_reading from "./assets/pics/landing-paint.png";
import Reading from "./assets/pics/read.jpg";
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import {
  BrowserRouter as Router ,
   Switch , 
   Route , 
   Link } from "react-router-dom";



class Category_psy extends React.Component {
    render() {
      return (
        <Link to="/psy_books">
        <img src={Psy} className={"img-thumbnail"} style={{ width:"30%" , margin: "1%"}} />
        </Link>
      );
    }
  }
  
  class Category_dastan_irani extends React.Component {
    render() {
      return ( 
        <Link to="/iranian_books">
        <img src={Dastan_irani} className={"img-thumbnail"} style={{ width:"20%" , margin: "1%"}}  />
        </ Link >
      );
    }
  }
  
  class Category_dastan_khareji extends React.Component {
    render() {
      return (<Link to="foreign_books" >
        <img src={Dastan_khareji} className={"img-thumbnail"} style={{width:"20%" , margin: "2%"}} />
        </ Link>
      );
    }
  }
  
  class Pic_reading extends React.Component {
    render() {
      return ( 
   <Container >
    <img src={Reading}  style={{float:"left" , width:"50%" , opacity:"70%"  }} />
    </Container>
      );
    }
  }
  
  class Div1 extends React.Component {
    render() {
      return (
      <Container dir="rtl" > 
      <Row>
        
         <Col md="11" style={{backgroundColor: "rgba(255,255,255,1)"  ,  borderRadius:"5%", margin:"5%" , padding:"2%"}}>
            
           <br />
         <Pic_reading />
        <Category_dastan_irani /> <Category_dastan_khareji /> <Category_psy />
        <br/><br/>
       
        </Col>
      </Row>
    </Container>
    );
    }
  
  }

export default Div1;  