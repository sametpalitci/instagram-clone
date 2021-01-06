import "../stylesheets/pages.css";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
const MainPage = (props) => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Card 
            userName="John"
            userAvatar="https://www.w3schools.com/howto/img_avatar.png"
            photo="https://www.w3schools.com/howto/img_avatar.png"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default MainPage;
