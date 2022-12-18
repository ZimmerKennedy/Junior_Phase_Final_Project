import React from 'react';
import { Routes, Route, Link } from "react-router-dom"
import AllCampus from './AllCampus.js';
import AllStudents from './AllStudent.js';
import ACampus from './ACampus.js';
import AStudent from './AStudent.js';
import Home from './Home.js'


const App = () => {
  return (
    <div className='App'>
      <nav>
        <Link to="/AllCampus">Campuses</Link>
        <Link to="/AllStudents">Students</Link>
        <Link to="/"> Home </Link>
      </nav>
      <Routes>
        <Route path='/AllCampus' element={<AllCampus />} />
        <Route path='/AllStudents' element={<AllStudents />} />
        <Route path='/ACampus/:id' element={<ACampus />} />
        <Route path='/AStudent/:id' element={<AStudent />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>


  )
};

export default App;