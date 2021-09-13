import { BrowserRouter, Route } from 'react-router-dom';

import { Login } from './pages/Login/Login.js'
import { Register } from './pages/Register/Register.js';
import { Orders } from './pages/Orders/Orders.js';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/orders" component={Orders} />
    </BrowserRouter>
  );
}

export default App;
