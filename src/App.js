import React from 'react';
// import './App.css';
import HomePage from './Pages/HomePage/homePage';
import Cenovnik from './Pages/CenovnikPage/cenovnikPage';
import Kontakt from './Pages/Kontakt/kontakt';
// import NovostiSinglePage from './Pages/NovostiSinglePage/novostiSinglePage';
// import NovostiMainPage from './Pages/NovostiMainPage/NovostiMainPage';
// import Pitanja from "./Pages/Pitanja/pitanja";
//  import About from './Pages/About/about';
import {  BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Zakazi from './Pages/Zakazi/zakazi';
import './App.css';



function App() {
  return (
    <div className="App">
      <Routes>
    <Route exact path="/" element={<HomePage/>}/>
      <Route path='Pages/CenovnikPage' element={<Cenovnik /> }/>
      <Route path='/Pages/Kontakt' element={<Kontakt/>} /> 
      {/*<NovostiSinglePage /> 
     <NovostiMainPage /> 
      <Pitanja/>   */}
       {/* <About/> */}
      <Route path='/Pages/Zakazi' element={<Zakazi/>}/>
      </Routes>
    </div>
  );
}

export default App;
