import { react } from '@babel/types';
import React from 'react';
import ReactDOM from 'react-dom';

import Karamazof from './assets/pics/karamazof.jpg';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import {
    BrowserRouter as Router ,
     Switch , 
     Route , 
     Link } from "react-router-dom";






class Book1 extends React.Component {


    render() {
        return(
            <Container >
                <Row>
                    
                    <Col md="4" style={{margin:"2%"}} >
                        <br/>
                         <img src={Karamazof} className={"img-thumbnail "} style={{float:"right" , width:"60%"   }} />

                    </Col>
                    
                    <Col md="5" className="div-bg text-body" style={{backgroundColor:"rgba(255,255,255,70%)" , direction: "rtl" , fontSize: "100%", margin: "2%" }}>
                        <br/>
                        <span className="book-name"> <b> نام کتاب: برادران کارامازوف </b></span> <br/>
                        <span className="book-author">نویسنده: فیودور داستایوفسکی </span> <br/>
                        <span className="book-publisher" >  ناشر: مرکز </span><br/>
                        <span className="book-year">  سال انتشار: ۱۳۹۶ </span><br/>
                        <span className="book-cost"> قیمت: ۱۷۰۰۰۰ </span> <br/>
           
                        <Button color="info">افزودن به سبد خرید</Button>{' '}
                        <br/>
                    </Col>
                </Row>
                
            </Container>
           
           
        


        );
    }

}
export default Book1;