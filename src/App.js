import React, {Component } from 'react';
import './App.css';
import HomePage from './pages/home.component';
import ParticlesJs from './pages/particlesParams';
import { Route, Switch } from 'react-router-dom';

//import Navi from './component/navi/navi.component';
import About from './component/content/about/about.component';
import Home from './component/content/home/home.component';
import Skills from './component/content/skill/skill.component';
import Projects from './component/content/project/project.component';
import Links from './component/content/link/link.component';
import NaviBar from './component/navibar/navibar.component';

class App extends Component{
  
    render(){
        return (
			<div>
                <HomePage />
                <NaviBar />
                <div className='contentContainer'>
                    <Switch>
                        <Route exact path='/' component={ Home }></Route>
                        <Route path='/name-card' component={ Home }></Route>
                        <Route path='/about' component={ About }></Route>
                        <Route path='/skill' component={ Skills }></Route>
                        <Route path='/project' component={ Projects }></Route>
                        <Route path='/link' component={ Links }></Route>
                    </Switch> 
                </div> 
				<ParticlesJs />
			</div>
        );
    };
}

export default App;
