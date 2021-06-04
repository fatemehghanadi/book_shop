import { react } from '@babel/types';
import React from 'react';
import ReactDOM from 'react-dom';
import './form_login.css';
import Admin_p_func from './admin_panel.js';
//import { Route } from 'react-router';
import Div1 from './home_div1.js';
import {
  BrowserRouter as Router ,
   Switch , 
   Route , 
   Link,
   useParams,
   useRouteMatch
   } from "react-router-dom";

   import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
   import axios from 'axios'



class Login_form extends React.Component {
  constructor(props) {
    super(props);
    // this.submitHandler = this.submitHandler.bind(this);
    this.state = {
      user: " ",
      pass: " "
    };
  }
  // submitHandler = (ev) => {
  //   ev.preventDefault();
  //   const data = new FormData(ev.target);
  //   fetch('????', {
  //     method: 'POST',
  //     body: data,
  //   });
  // };
  // clickHandeler = (event) => {
  //   if (!document.getElementById('userName').value) {
  //     event.preventDefault();
  //     alert('لطفا نام کاربری را وارد کنید');
  //   } else if (!document.getElementById('userPassword').value) {
  //     event.preventDefault();
  //     alert('لطفا رمز عبور را وارد کنید');
  //   } else {
  //     this.state.username = document.getElementById('userName').value;
  //     this.state.password = document.getElementById('userPassword').value;
  //   }
  // };
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
    const { user ,
      pass
} = this. state
    return (
      <div className="col-xxl-6" id="formDiv">
        <form onSubmit={this.submitHandler} className="formbody p-4 form-group">
          <div className="container">
            <p id="voroud">ورود</p>
            <input
              className="my-4 form-control input1"
              style={{backgroundColor:"rgb(255, 255, 255)"}}
              onChange={this.changeHandler}
              value={user}
              id="user"
              name="user"
              type="text"
              placeholder="نام کاربری"
            />
            <input
              className="mb-5 form-control input1"
              style={{backgroundColor:"rgb(255, 255, 255)"}}
              onChange={this.changeHandler}
              value={pass}
              id="pass"
              name="pass"
              type="password"
              placeholder="رمز عبور"
            />
            {/* <Button color="info"
            style={{margin:"2%"}}
            onClick={this.onSubmit}>
              <Link to="/" style={{ color:"white"}}  onClick={this.onSubmit}>
             ورود
              </Link>
            </Button> */}
            <Button color="info" onClick={this.onSubmit}>ورود</Button>{' '}
            {/* <Button
              color="info"
              style={{margin:"2%"}} 
              to="/admin_panel">
                <Link to="/admin_panel" style={{ color:"white" }}>
              
              ادمین
              </Link>
            </Button> */}
          </div>
        </form>
      </div>
    );
  }
}

function Login_form_func(){
  let {path , url}=useRouteMatch();
  return(
    <Router>
    <Switch>
      <Route exact path={path}>
          <Login_form/>
      </Route>

    <Route  path="/admin_panel">
        <Admin_p_func />
    </Route>

    <Route path="/">
        <Div1/>
    </Route>
    
</Switch>
</Router>
  );
}

export default Login_form_func;