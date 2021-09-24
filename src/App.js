import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { isAuthenticated } from './services/auth.js'


import { Login } from './pages/Login/Login.js'
import { Register } from './pages/Register/Register.js';
import { Hall } from './pages/Hall/Hall.js';
import { MenuMorning } from './pages/Menu/MenuMorning.js'
import { MenuMain } from './pages/Menu/MenuMain.js'


const PrivateRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={props => (
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{pathname: '/login', state: { from: props.location}}} />
      )
    )} />
  );
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/hall" component={Hall} />
        <PrivateRoute path="/menumorning" component={MenuMorning} />
        <PrivateRoute path="/menumain" component={MenuMain} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
