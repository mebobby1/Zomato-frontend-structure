import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Filter from './Components/Filter';

const App = () => {
  return (
   
   <Router>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/filter' element={<Filter/>} />
    </Routes>
   </Router>
  )
}

export default App