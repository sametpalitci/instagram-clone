import "../stylesheets/pages.css";
import { useState } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { loginControl } from '../controller/mainController';
const LoginPage = (props) => {
  console.log(props)
  const [userField, setUserField] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const loginToMain = (e)=>{
    e.preventDefault();
    props.onLoginControl(userField,userPassword);
  }
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="card py-3 px-3">
            <div className="card-body ">
              <div className="d-flex align-items-center justify-content-center">
                <img
                  className="w-25 img-fluid"
                  src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png"
                  alt=""
                />
              </div>
              {props.err.length > 0 ?
                                <div className="alert alert-primary" role="alert">
                                   {props.err}
                                </div>
                                : null

                            }
              <form onSubmit={loginToMain}>
                <div className="form-row">
                  <div className="col-12 mt-2">
                    <input
                      type="text"
                      value={userField}
                      onChange={(text)=>setUserField(text.target.value)}
                      className="form-control"
                      placeholder="Telefon numarası, kullanıcı adı veya e-posta"
                    />
                  </div>
                  <div className="col-12 mt-2">
                    <input
                      type="password"
                      value={userPassword}
                      onChange={(text)=>setUserPassword(text.target.value)}
                      className="form-control"
                      placeholder="Şifre"
                    />
                  </div>
                  <div className="col-12 mt-2">
                    <button onClick={loginToMain} className="form-control btn btn-primary">
                      Giriş Yap
                    </button>
                  </div>
                </div>
              </form>
              <p className="text-center my-3 mx-0 p-0">
                <Link to="/forgot" className="text-center text-primary fs-6">
                  Şifreni mi unuttun
                </Link>
              </p>
            </div>
          </div>
          <div className="card py-3 px-3 mt-2">
            <div className="card-body">
              <p className="text-center m-0 p-0">
                Hesabın yok mu? <Link to="/register" className="ml-2 text-primary fs-6">Kaydol</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

const mapStateToProps = state => state;

const mapDispatchToProps = {
  onLoginControl:loginControl
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);
