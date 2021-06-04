import { react } from '@babel/types';
import React from 'react';
import ReactDOM from 'react-dom';
import Atomic from './assets/pics/atomic.jpg';

import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import {
    BrowserRouter as Router ,
     Switch , 
     Route , 
     Link } from "react-router-dom";






class Book2 extends React.Component {


    render() {
        return(
            <Container >
                <Row>
                    
                    <Col md="4" style={{margin:"2%"}} >
                        <br/>
                         <img src={Atomic} className={"img-thumbnail "} style={{float:"right" , width:"60%"   }} />

                    </Col>
                    
                    <Col md="5" className="div-bg text-body" style={{backgroundColor:"rgba(255,255,255,70%)" , direction: "rtl" , fontSize: "100%", margin: "2%" }}>
                        <br/>
                        <span className="book-name"> <b> نام کتاب: عادت‌های اتمی </b></span> <br/>
                        <span className="book-author">نویسنده: جیمز کلیر </span> <br/>
                        <span className="book-publisher" >  ناشر: هورمزد </span><br/>
                        <span className="book-year">  سال انتشار: ۱۳۹۹ </span><br/>
                        <span className="book-cost"> قیمت: ۵۵۰۰۰ </span> <br/>
           
                        <Button color="info">افزودن به سبد خرید</Button>{' '}
                        <br/>
                    </Col>
                </Row>
                
            </Container>
           
           
        


        );
    }

}
export default Book2;