import "../stylesheets/pages.css";
import { useState } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { registerControl } from '../controller/mainController';
const RegisterPage = (props) => {

    const [emailOrPhone, setEmailOrPhone] = useState("");
    const [nameSurname, setNameSurname] = useState("");
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");
    
    const registerButton = (e) => {
        e.preventDefault();
        props.onRegisterControl(emailOrPhone, nameSurname, userName, userPassword);
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
                            <p className="text-center px-5">Arkadaşlarının fotoğraf ve videolarını görmek için kaydol.</p>
                            {props.err.length > 0 ?
                                <div className="alert alert-primary" role="alert">
                                   {props.err}
                                </div>
                                : null

                            }
                            <form onSubmit={registerButton}>
                                <div className="form-row">
                                    <div className="col-12 mt-2">
                                        <input
                                            type="text"
                                            value={emailOrPhone}
                                            onChange={(text) => setEmailOrPhone(text.target.value)}
                                            className="form-control"
                                            placeholder="Telefon numarası veya e-posta"
                                        />
                                    </div>
                                    <div className="col-12 mt-2">
                                        <input
                                            type="text"
                                            value={nameSurname}
                                            onChange={(text) => setNameSurname(text.target.value)}
                                            className="form-control"
                                            placeholder="Adı Soyadı"
                                        />
                                    </div>
                                    <div className="col-12 mt-2">
                                        <input
                                            type="text"
                                            value={userName}
                                            onChange={(text) => setUserName(text.target.value)}
                                            className="form-control"
                                            placeholder="Kullanıcı adı"
                                        />
                                    </div>
                                    <div className="col-12 mt-2">
                                        <input
                                            type="password"
                                            value={userPassword}
                                            onChange={(text) => setUserPassword(text.target.value)}
                                            className="form-control"
                                            placeholder="Şifre"
                                        />
                                    </div>
                                    <div className="col-12 mt-2">
                                        <button className="form-control btn btn-primary" onClick={registerButton}>Kaydol</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="card py-3 px-3 mt-2">
                        <div className="card-body">
                            <p className="text-center m-0 p-0">
                                Hesabın var mı?  <Link to="/login" className="ml-2 text-primary fs-6">Giriş yap</Link>
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
    onRegisterControl: registerControl
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
