import { react } from '@babel/types';
import React ,{ useState } from 'react';
import ReactDOM from 'react-dom';
import Add_book from './add_book.js';
import Shop from './shopping.js';


import { Container, Col, Form, Row, FormGroup, Label, Input, Button,ButtonDropdown,Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {
    BrowserRouter as Router ,
     Switch , 
     Route , 
     Link,
     useParams,
     useRouteMatch
     } from "react-router-dom";






function Admin_p  (props) {

    let {path , url}=useRouteMatch();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

  
    
        return(
            <Container >
                <Row>
                    
                    <Col md="8" style={{margin:"2%" , backgroundColor:"rgba(255,255,255,0.7)", left:"20%"}} >
                        <br/>
                        <br/>
                        <br/>
                        <Link to={`${url}/add_book`}>  
                        افزودن کتاب
                        </Link><br/>

                        <Link >
                        فروشگاه
                        </Link><br/>

                        <Link  to={`${url}/submitted`} >
                        سفارشات ثبت شده
                        </Link><br/>

                        <Link >
                        سفارشات تایید شده
                        </Link><br/>




                        
                         <ButtonDropdown     style={{ margin:"5%" }}  isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle caret color="info" style={{fontSize:"110%"}}>
                                کتاب ها
                            </DropdownToggle>
                            <DropdownMenu>
                                    <DropdownItem active >
                                        افزودن
                                    </DropdownItem>
                                    <DropdownItem >
                                            فروشگاه
                                    </DropdownItem>
                                        
                            </DropdownMenu>
                        </ButtonDropdown>
                        
                            

                        <ButtonDropdown style={{ margin:"5%" }}  isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle caret color="info" style={{fontSize:"110%"}}>
                                سفارش ها
                            </DropdownToggle>
                            <DropdownMenu>
                                    <DropdownItem >
                                        تایید شده
                                    </DropdownItem>
                                    <DropdownItem >
                                            ثبت شده
                                    </DropdownItem>
                                        
                            </DropdownMenu>
                        </ButtonDropdown>
                        <br/>
                        <br/>
                        <Button color="danger" style={{ margin:"10%" }}>خروج</Button>
                    </Col>
                </Row>
                
                
            </Container>
            
           
           
        


        );
    }

function Admin_p_func (props){
    let {path , url}=useRouteMatch();
    return(
    <Router>
    <Switch>
        <Route  exact path={path}>
            <Admin_p/>
        </Route>


       <Route path="/admin_panel/submitted" >
           <Shop/>
        </Route>

       <Route path="/admin_panel/add_book">
            <Add_book/>
       </Route>
           
          
        
    </Switch>
    </Router>
    
    
    

    );
}

export default Admin_p_func;