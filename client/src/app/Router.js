
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPage from './pages/ForgotPage';
import MainPage from './pages/MainPage';
import Header from './pages/components/Header';
import Footer from './pages/components/Footer';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/register" component={RegisterPage} />
                <Route exact path="/forgot" component={ForgotPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;