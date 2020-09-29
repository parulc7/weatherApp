import React from 'react';
import './App.css';
import NavBar from './Components/Navbar';
import CityForm from './Pages/CityForm';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './Pages/About';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Route exact path='/'>
          <CityForm/>
        </Route>
        <Route path='/about'><About/></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
