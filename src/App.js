import React from "react";
import './App.css';

import SideBar from './components/SideBar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './Pages/About'
import Blog from './Pages/Blog'
import Projects from './Pages/Projects'
import Resume from './Pages/Resume'


function App() {
  return (
    <>
      <Router>
      <SideBar />
        <Switch>
          <Route path="/" exact component={About}></Route>
          <Route path="/projects" component={Projects}></Route>
          <Route path="/resume" component={Resume}></Route>
          {/* <Route path="/blog" component={Blog}></Route> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
