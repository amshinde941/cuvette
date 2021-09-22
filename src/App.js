import Home from './pages/Home';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exaxt path="/home" component={Home} />
        <Route exaxt path="/login" component={Login} />
      </Switch>      
    </div>
    </BrowserRouter>
  );
}

export default App;
