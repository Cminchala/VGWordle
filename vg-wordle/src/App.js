import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Main from './Main'

import './App.css'


const App = () => (
  <div classname='app'>
    <h1>VGWordle</h1>
    <Navigation />
    <Main />
    
  </div>

  
);


const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink end className= {({isActive}) => isActive ? 'current' : undefined}  to='/'>Home</NavLink></li>
      <li><NavLink end className={({isActive}) => isActive ? 'current' : undefined} to='/catalog'>Catalog</NavLink></li>
      <li><NavLink end className={({isActive}) => isActive ? 'current' : undefined} to='/game'>Game Test</NavLink></li>
    </ul>
  </nav>
);



export default App;
