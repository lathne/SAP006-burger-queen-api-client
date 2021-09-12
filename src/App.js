import { BrowserRouter, Route } from 'react-router-dom';

import { Login } from './pages/Login.js'
import { Register } from './pages/Register.js';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/register" component={Register} />
    </BrowserRouter>
    
  );
}

export default App;
