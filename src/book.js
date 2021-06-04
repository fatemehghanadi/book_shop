import { react } from '@babel/types';
import React from 'react';
import ReactDOM from 'react-dom';

import Cheshmhayash from './assets/pics/cheshmhayash.jpeg';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import {
    BrowserRouter as Router ,
     Switch , 
     Route , 
     Link,
     useParams,
     useRouteMatch
     } from "react-router-dom";






class Book extends React.Component {


    render() {
        return(
            <Container >
                <Row>
                    
                    <Col md="4" style={{margin:"2%"}} >
                        <br/>
                         <img src={Cheshmhayash} className={"img-thumbnail "} style={{float:"right" , width:"60%"   }} />

                    </Col>
                    
                    <Col md="5" className="div-bg text-body" style={{backgroundColor:"rgba(255,255,255,70%)" , direction: "rtl" , fontSize: "100%", margin: "2%" }}>
                        <br/>
                        <span className="book-name"> <b> نام کتاب: چشم‌هایش </b></span> <br/>
                        <span className="book-author">نویسنده: بزرگ علوی </span> <br/>
                        <span className="book-publisher" >  ناشر: نگاه </span><br/>
                        <span className="book-year">  سال انتشار: ۱۳۷۶ </span><br/>
                        <span className="book-cost"> قیمت: ۱۵۰۰۰ </span> <br/>
           
                        <Button color="info">افزودن به سبد خرید</Button>{' '}
                        <br/>
                    </Col>
                </Row>
                
            </Container>
           
           
        


        );
    }

}
export default Book;