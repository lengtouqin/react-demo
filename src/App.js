import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import Index from './pages/Index';
import Cinima from './pages/Cinima';
import Center from './pages/Center';
import Nav from './pages/Nav';
import City from "./pages/City";

class App extends React.Component{
  render(){
  return (
    <div>
    <Switch>
        <Route path="/index" exact component={Index}></Route>
        <Route path="/cinima" exact component={Cinima}></Route>
        <Route path="/center" exact component={Center}></Route>
        <Route path="/city" component={City}></Route>
        <Route path="/" component={Index}></Route>
    </Switch>
      <Nav></Nav>
    </div>
  );
  }
}
export default App;
