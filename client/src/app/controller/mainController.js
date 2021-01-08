import { addUser, getData, getUserData } from "../actions/main-action";
import { errorAction } from "../actions/error-action";
import bcrypt from "bcryptjs";
import emptyAreaCheck from "../utils/emptyAreaCheck";
import jwt from "jsonwebtoken";

const registerControl = (emailOrPhone, nameSurname, userName, userPassword) => {
    const checkValid = emptyAreaCheck(
        emailOrPhone,
        nameSurname,
        userName,
        userPassword
    );
    if (!checkValid) {
        return (dispatch) => {
            dispatch(errorAction("Alanlar boş olamaz"));
        };
    }
    return (dispatchOneData) => {
        fetch(`http://localhost:8080/users?loginField=${emailOrPhone}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
            .then((singleData) => singleData.json())
            .then((singleData) => {
                if (singleData[0] !== undefined) {
                    dispatchOneData(errorAction("Böyle bir hesap var!"));
                } else {
                    const saltPassword = bcrypt.genSaltSync(10);
                    const hashPassword = bcrypt.hashSync(userPassword, saltPassword);
                    fetch("http://localhost:8080/users", {
                            method: "POST",
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                loginField: emailOrPhone,
                                nameSurname: nameSurname,
                                userName: userName,
                                password: hashPassword,
                            }),
                        })
                        .then((res) => res.json())
                        .then((res) => {
                            dispatchOneData(errorAction("Başarılı bir şekilde kayıt olundu"));
                            dispatchOneData(addUser(res));
                        })
                        .catch((err) => console.log(err));
                }
            })
            .catch((err) => console.log(err));
    };
};

const loginControl = (userField, userPassword) => {
    const checkValid = emptyAreaCheck(userField, userPassword);
    if (!checkValid) {
        return (dispatch) => {
            dispatch(errorAction("Alanlar boş olamaz"));
        };
    }
    return (dispatch) => {
        fetch(`http://localhost:8080/users?loginField=${userField}`, {
                method: "GET",
                headers: {
                    accept: "application/json",
                    contentType: "application/json",
                },
            })
            .then((res) => res.json())
            .then((res) => {
                if (res[0] !== undefined) {
                    const passwordCheck = bcrypt.compareSync(
                        userPassword,
                        res[0].password
                    );
                    if (passwordCheck) {
                        const potantialToken = {
                            id: res[0].id,
                            loginField: res[0].loginField,
                            nameSurname: res[0].nameSurname,
                            userName: res[0].userName,
                        };
                        const token = jwt.sign(potantialToken, "TEST_SECRET_KEY");
                        localStorage.setItem("token", token);
                    } else {
                        dispatch(errorAction("Şifre veya parola hatalı."));
                    }
                } else {
                    dispatch(errorAction("Şifre veya parola hatalı."));
                }
            });
    };
};

const mainPageContext = () => {
    return dispatch => {
        fetch(`http://localhost:8080/photos`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        }).then(res => res.json()).then((res) => dispatch(getData(res)));
    }
};

const userNameContext = (id) => {
    return dispatch => {
        fetch(`http://localhost:8080/photos?user_id=${id}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        }).then(res => res.json()).then((res) => dispatch(getUserData(res)));
    }
};


export { registerControl, loginControl, mainPageContext, userNameContext };