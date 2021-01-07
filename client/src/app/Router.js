
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPage from './pages/ForgotPage';
import MainPage from './pages/MainPage';
import UserPage from './pages/UserPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                {localStorage.getItem("token") ? 
                <>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/user" component={UserPage} />
                    <Route exact render={()=><h1>Giriş Yapmışsın.</h1>} />
                </>:
                <>
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/register" component={RegisterPage} />
                    <Route exact path="/forgot" component={ForgotPage} />   
                    <Route exact render={()=><h1>Giriş Yapmamışsın.</h1>} />
                </>
                }
                
            </Switch>
        </BrowserRouter>
    );
};

export default Router;