import "../stylesheets/pages.css";
import { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import { mainPageContext } from '../controller/mainController';
const MainPage =  (props) => {
const [User, setUser] = useState("")
  useEffect(()=>{
	props.onMainPageContext();
  },[]);
  const userNameFinder = (id) => {
	fetch(`http://localhost:8080/users/${id}`, {
		method: "GET",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		}
	})
	.then(res => res.json())
	.then(res => res.userName)
	.then(res=> res);
  }
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {props.main.map((n,key)=>{
				console.log(n)
              return(
            	<Card
					key={key}
					userName={userNameFinder(n.user_id)}
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
