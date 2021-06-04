import { react } from '@babel/types';
import React from 'react';
import ReactDOM from 'react-dom';
import Cheshmhayash from './assets/pics/cheshmhayash.jpeg';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import {
    BrowserRouter as Router ,
     Switch ,
     Route ,
     Link } from "react-router-dom";


import ReactFetchImage, { fetchBase64 } from 'react-fetch-image'



class Book_List extends React.Component {

constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items:[]
      };
    }

    componentDidMount() {
    fetch("http://127.0.0.1:8000/api/books/categories/")
      .then((response) => response.json())
      .then((result) => {
          console.log('Response from main API: ',result)
        this.setState({
          isLoaded: true,
          items: result.items,
        })
      })
      .catch((error) => {
        this.setState({
          isLoaded: true,
          error
        })
      });
  }
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
          var c=[];
          var item={}
          // items.map(item=>{
            for (var g=0; g<items.length; g++)
            {
                if (items[g].title=="contemporary"){
                   item=items[g];
                    break;
                }
            }
          var i=0;
          for (i=0;i<item.books.length;i++)
          {
                c.push(
                    <Row>
                    <Col md="4" style={{margin:"2%"}} >
                    <img src={item.books[i].image_url} className={"img-thumbnail "} style={{float:"right" , width:"60%"   }} />
                        <br/>
                    </Col>
					<Col md="5" className="div-bg text-body" style={{backgroundColor:"rgba(255,255,255,70%)" , direction: "rtl" , fontSize: "100%", margin: "2%" }}>
					<br/>
                         <span className="book-name" > <b> نام کتاب:{item.books[i].name}</b></span> <br/>
                         <span className="book-author">نویسنده:{item.books[i].author_name[0].AName}</span> <br/>
                         <span className="book-publisher" >  ناشر:{item.books[i].name}</span><br/>
                         <span className="book-year">  سال انتشار:{item.books[i].name}  </span><br/>
                         <span className="book-cost"> قیمت:{item.books[i].name} </span> <br/>
                        <Button color="info">افزودن به سبد خرید</Button>{' '}
                        <br/>
                        <br/>
                    </Col>
                </Row>

                )
          }
        // })







        return (

	 <Container >
          {c}
                </Container>



        );
}
}
}
export default Book_List;