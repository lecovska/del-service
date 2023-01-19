import React from 'react';
import {useEffect} from 'react';
// import './App.css';
import HomePage from './Pages/HomePage/homePage';
import Cenovnik from './Pages/CenovnikPage/cenovnikPage';
import Kontakt from './Pages/Kontakt/kontakt';
// import Usluge from './Pages/Usluge/usluge';
import Uslugee from './Pages/Uslugee/uslugee';
// import NovostiSinglePage from './Pages/NovostiSinglePage/novostiSinglePage';
// import NovostiMainPage from './Pages/NovostiMainPage/NovostiMainPage';
import Pitanja from "./Pages/Pitanja/pitanja";
import Kalkulator from "./Pages/Kalkulator/kalkulator";
import About from './Pages/About/about';
import { Route, Routes, Navigate } from "react-router-dom";
import Zakazi from './Pages/Zakazi/zakazi';
import './App.css';
import ScrollToTop from "react-scroll-to-top";





function App() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, []);


  return (
    
    <div className="App">
    
      <Routes>
    <Route exact path='/' element={<HomePage />}/>
      <Route path='/CenovnikPage' element={<Cenovnik /> }/>
      <Route path='/Kontakt' element={<Kontakt/>} /> 
      <Route path='/About' element={<About/>} /> 
      <Route path='/Uslugee' element={<Uslugee/>} /> 
      <Route path='/Pitanja' element={<Pitanja/>} /> 
      <Route path='/Kalkulator' element={<Kalkulator/>} />
      {/*<NovostiSinglePage /> 
     <NovostiMainPage /> 
       */}
      
      <Route path='/Zakazi' element={<Zakazi/>}/>
      <Route path='*' element={<Navigate to='/' />} />  
      
          </Routes>
          <ScrollToTop smooth />
    </div>
    
  );
}

export default App;
