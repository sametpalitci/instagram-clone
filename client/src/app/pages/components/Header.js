import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-full card ">
      <div className="container">
        <div className="row">
          <div className="col-12 py-1">
            <div className="d-flex align-items-center justify-content-between">
              <div className="headerLogo d-flex align-items-center justify-content-start">
                <img
                  className="w-25 img-fluid"
                  src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png"
                  alt=""
                />
              </div>
              <div className="headerLogo d-flex align-items-center justify-content-between flex-row">
                <Link to="/" className="text-dark">
                  <ion-icon name="home-outline" color="#333" size="large"></ion-icon>
                </Link>
                <Link to="/user" className="text-dark" >
                  <ion-icon  name="person-outline" color="#333" size="large"></ion-icon>
                </Link>
                <Link to="/logout" className="text-dark" >
                  <ion-icon  name="log-out-outline" color="#333" size="large"></ion-icon>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
