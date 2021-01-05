import "../stylesheets/pages.css";
import { Link } from "react-router-dom";
const RegisterPage = (props) => {
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
                            <form>
                                <div class="form-row">
                                    <div class="col-12 mt-2">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Telefon numarası, kullanıcı adı veya e-posta"
                                        />
                                    </div>
                                    <div class="col-12 mt-2">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Adı Soyadı"
                                        />
                                    </div>
                                    <div class="col-12 mt-2">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Kullanıcı adı"
                                        />
                                    </div>
                                    <div class="col-12 mt-2">
                                        <input
                                            type="password"
                                            class="form-control"
                                            placeholder="Şifre"
                                        />
                                    </div>
                                    <div class="col-12 mt-2">
                                        <button class="form-control btn btn-primary">Kaydol</button>
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

export default RegisterPage;
