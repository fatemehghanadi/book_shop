import { react } from '@babel/types';
import React from 'react';
import ReactDOM from 'react-dom';

import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import {
    BrowserRouter as Router ,
     Switch , 
     Route , 
     Link, 
     useParams,
     useRouteMatch} from "react-router-dom";

class Add_book extends React.Component {
         render(){
             
             return(
                <Container >
                <Row>
                    
                    <Col md="10" style={{backgroundColor:"rgba(77, 184, 77,0.7)", margin:"2%"}} >
                        <br/>

                        <Form className="form2" action="#" target="_blank" method="post" autocomplete="on" >
                        <input type="file" id="myFile" name="filename" /><br/>

                        <input type="text" id="book_name" name="book_name" placeholder="نام کتاب" required ></input><br />
                        <input type="text" id="author_name" name="author_name" placeholder="نام نویسنده" required ></input><br />
                        <input type="text" id="publisher" name="publisher" placeholder="ناشر" required ></input><br />
                        
                        <select id="category" name="category" aria-placeholder="نوع" >
                            <option value="psy">روانشناسی</option>
                            <option value="iranian_story" selected>داستان ایرانی</option>
                            <option value="foreign_story">داستان خارجی</option>  
                        </select><br/>

                        <input type="text" id="cost" name="cost" placeholder="قیمت" required ></input><br />
                        <input type="number" id="num" name="num" placeholder="تعداد" required ></input><br />
                        <input type="number" id="year" name="year" placeholder="سال چاپ" required ></input><br />
                        <input type="text" id="digest" name="digest" placeholder="چکیده"  ></input><br /><br/>

                        <Button color="info">افزودن</Button>{' '}
                        <br/><br/>

                        </Form>
                        

                    </Col>
                    
                    
                </Row>
                
            </Container>

             );
         }
    }

     

export default Add_book;