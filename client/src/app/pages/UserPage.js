import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import {connect} from 'react-redux';
import {userNameContext} from '../controller/mainController'
import { useEffect, useState } from "react";
import jwt from 'jsonwebtoken';

const UserPage = (props) => {
  useEffect(()=>{
    const token = localStorage.getItem("token");
    const verifyToken = jwt.verify(token,"TEST_SECRET_KEY");
    props.onUserNameContext(verifyToken.id);
  },[]);
  console.log(props)
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {props.main.map((n,key)=>{
              return( 
                <Card
                key={key}
                userName={n.user_id}
                  photo={n.image_url}
                />)
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const mapStateToProps = state => state;

const mapDispatchToProps = {
  onUserNameContext:userNameContext
}

export default connect(mapStateToProps,mapDispatchToProps)(UserPage);
