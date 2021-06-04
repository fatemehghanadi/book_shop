import logo from './logo.svg';
import './App.css';
import './register_body.css';
import React from 'react';

import Login_form from './form.js';
import Book from './book.js';
import Book1 from './book1.js';
import Book2 from './book2.js';
import Book_List from './book_list.js';
import Book_List1 from './book_list1.js';
import Book_List2 from './book_list2.js';

import Div1 from './home_div1.js';
import Register_form from './register_form';
import Register from './register.js';


import { Collapse, Navbar  ,   Nav,NavItem, NavLink} from 'reactstrap';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import {
  BrowserRouter as Router ,
   Switch , 
   Route , 
   Link,
   useParams,
   useRouteMatch } from "react-router-dom";






class Footer extends React.Component {
  render() {
    return <Container> 
      <Row>
          <Col md="11" style={{backgroundColor: "rgba(128, 48, 138,90%)" ,  borderRadius:"5%", margin:"5%" , padding:"2%"}}>
          <Col md="3" style={{margin:"1%" , padding: "1%" , float:"left"}}> :آدرس<br/>....................<br/>...................<br/>  </Col>
          <Col md="3" style={{margin:"1%" , padding: "1%" , float:"left"}}>شماره تماس: ۰۰۰۰۰۰۰۰۰۰</Col>
          <Col md="3" style={{margin:"1%" , padding: "1%" , float:"right"}}> :سایر راه‌های ارتباطی ............................</Col>

        </Col>
      </Row>
    </Container>
  }
}




function App(props) {
  
  return (
    <div className={"App App_header"}>
      <br/>
  <Register  />
  <Router>
  <Switch>
    <Route exact path="/">
      <Div1 />
    </Route>
    <Route path="/signup">
        <Register_form/>
    </Route>
    <Route path="/signin">
        <Login_form/>
    </Route>


    <Route path="/psy_books">
        <Book_List />
    </Route>

    <Route path="/foreign_books">
        <Book_List1 />
    </Route>

    <Route path="/iranian_books">
        <Book_List2 />
    </Route>

    

    
   

  </Switch>
  </Router>
  
  
  <br/>
  <Footer />
   </div>
  );
  
}

export default App;
