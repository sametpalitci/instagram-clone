import "../stylesheets/pages.css";
import { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import { mainPageContext } from '../controller/mainController';
const MainPage =  (props) => {
  useEffect(()=>{
	props.onMainPageContext();
  },[]);
 
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {props.main.map( (n,key)=>{
              return(
            	<Card
                key={key}
                userName={n.user_id}
                photo={n.image_url}
                />
              );
            })}
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const mapStateToProps = state =>state;

const mapDispatchToProps = {
  onMainPageContext:mainPageContext
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
