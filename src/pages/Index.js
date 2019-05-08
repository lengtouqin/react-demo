import React from 'react';
import Cinima from './Cinima';
import Local from './Localtion';
import Center from './Center';
import {Route,Switch,Redirect} from 'react-router-dom';
import Movie from './Showmovie';
class Index extends React.Component{
    render(){
        return(
            <div className="main">
            <Switch>
                <Route path="/center" component={Center}></Route>
                <Route path="/cinima" component={Cinima}></Route>
                {/* <Redirect to="/index"></Redirect> */}
            </Switch>
            {/* <Movie></Movie> */}
            <Local></Local>
                
            </div>
        )
    }

}
export default Index;