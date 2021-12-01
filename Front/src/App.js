import React, {Component} from "react";
import {
  BrowserRouter,
  NavLink,
  Switch,
  Route
}
from 'react-router-dom';
import {Bounce, Fade, Roll, Slide }from 'react-reveal';
import TitlePenleft from './Assets/TitlePenLeft.png';
import TitlePenRight from './Assets/TitlePenRight.png';
import NewTask from "./Components/Newtask";
import TODO from './Components/TODO';
import './Css/App.scss';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
            <div>
                <div className="BoxTitle">
                    <div className="DisplayTitleHome">
                        <Slide right><img className="DisplayImgTitle" src={TitlePenleft} alt=""  /></Slide>
                        <Bounce><Roll><Fade right><h1 className="TitleHome">Todo</h1></Fade></Roll></Bounce>
                        <Bounce><Roll><Fade left><h1 className="TitleHome">List</h1></Fade></Roll></Bounce>
                        <Slide left><img className="DisplayImgTitle" src={TitlePenRight} alt=""  /></Slide>
                    </div>    
                </div>
                <BrowserRouter>
                <div className="DisplayWindows">
                    <NavLink exact to="/TODO" className="Link" activeClassName="current"><h2 className="SubTitleHome">Open To do List</h2></NavLink>
                    <NavLink to="/NewTodo" className="Link" activeClassName="current"><h2 className="SubTitleHome">Create New To do</h2></NavLink>
                </div>
                <Switch>       
                    <Route exact path="/TODO" component={TODO}></Route>
                    <Route path="/NewTodo" component={NewTask}></Route>
                </Switch>
                </BrowserRouter>
            </div> 
    );
  }
}
 
export default App;
