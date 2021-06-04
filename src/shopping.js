import { react } from '@babel/types';
import React from 'react';
import ReactDOM from 'react-dom';


import { Container, Col, Form, Row, FormGroup, Label, Input, Button,Table  } from 'reactstrap';
import {
    BrowserRouter as Router ,
     Switch , 
     Route , 
     Link,
     useParams,
     useRouteMatch
     } from "react-router-dom";






class Shop extends React.Component {


    render() {
        return(
            <Container >
                
                <Row>
                    
                    <Col md="8" style={{margin:"2%"}} >
                    <h2>سفارشات ثبت شده</h2>
                    <Table style={{backgroundColor:"rgba(255,255,255,0.7)"}}>
                    
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>تاریخ</th>
                            <th>مبلغ</th>
                            <th>وضعیت</th>
                            <th>سفارش دهنده</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td><Button>ثبت شده</Button></td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td><Button>ثبت شده</Button></td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td><Button>ثبت شده</Button></td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                    </Table>
                        
                            
                        
                       
                    </Col>
                    
                    
                </Row>
                
            </Container>
           
           
        


        );
    }

}
export default Shop;