import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import Today from './Today/Today';
import History from './History/History';
import Habits from './Habits/Habits';

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Login />
                </Route>
                <Route path="/cadastro" exact>
                    <SignUp />
                </Route>
                <Route path="/habitos" exact>
                    <Habits />
                </Route>
                <Route path="/hoje" exact>
                    <Today />
                </Route>
                <Route path="/historico" exact>
                    <History />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}