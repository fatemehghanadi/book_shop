import React from 'react';

import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import {
  BrowserRouter as Router ,
   Switch ,
   Route ,
   Link } from "react-router-dom";

import axios from 'axios'





class Register_form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name:" " ,
        email:" ",
        password:" ",
        password2:" ",
        phone_number:" ",
        city:" ",
        village:" ",
        address:" ",
        post_code:" "
    };
 
    }
 
 
    // naming = (e) => {
    //  this.setState({user : e.target.value});
     
    // }
 
    // submitting = (e) => {
    //   alert(  this.state.user + ' عزیز ثبت‌نام شما انجام شد .'   ) ;
    // }

    changeHandler=(e) => {
      this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
      e.preventDefault()
      console.log(this.state)
      axios.post('url ...............', this.state)
        .then(Response =>{
          console.log(Response)
        })
        .catch(error => {
          console.log(error)
        })
    }

    render() {
      const { name ,
      email,
      password,
      password2,
      phone_number,
      city,
      village,
      address,
      post_code
} = this. state
      return (
        <Container  >
          <Row>
            <Col md="12">
             
        <form onSubmit={this.submitHandler} className="form1" action="#" target="_blank" method="post" autocomplete="on" >
              <h3>فرم ثبت نام</h3> <br/>
             
              <input type="text" id="name" name="name" placeholder="نام کاربری" onChange={this.changeHandler}  value={name} required ></input><br />
              <input type="email" id="email" name="email" placeholder="ایمیل" value={email} onChange={this.changeHandler}  required /><br/>
              <input type="password" id="password" name="password" placeholder="رمز عبور" value={password} onChange={this.changeHandler}  required/><br/>
              <input type="password2" id="password2" name="password2" placeholder="تکرار رمز عبور" value={password2} onChange={this.changeHandler}  required/><br/>
              <br/>
              <input type="tel" id="phone_number" name="phone_number" placeHolder="شماره تلفن همراه" pattern="09[0-9]{9}" onChange={this.changeHandler}  value={phone_number}/><br/>
              <input type="text" id="city" name="city" placeholder="استان"  value={city} onChange={this.changeHandler}  ></input><br />
              <input type="text" id="village" name="village" placeholder="شهرستان" value={village} onChange={this.changeHandler}  ></input><br />  
              <textarea name="address" id="address" rows="8" cols="30" placeHolder="آدرس" value={address} onChange={this.changeHandler} ></textarea><br/>
             
              <input type="post-code" id="post_code" placeholder="کد پستی" name="post_code" value={post_code}onChange={this.changeHandler} /><br/>
     
              <Button color="info" onClick={this.onSubmit}>ثبت</Button>{' '}
              <br/><br/>
   
 
          </form>
          </Col>
          </Row>
          </Container>
 
      );
    }
  }
 export default Register_form;