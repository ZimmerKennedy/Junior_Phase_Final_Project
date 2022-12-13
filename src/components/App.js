import React from 'react';
import { Routes, Route, Link } from "react-router-dom"
import AllCampus from './AllCampus.js';
import AllStudents from './AllStudent.js';

const App = () => {
  return (
    <div className='App'>
      <nav>
        <Link to="/AllCampus">Show All Campuses</Link>
        <Link to="/AllStudents">Show All Students</Link>
      </nav>
      <Routes>
        <Route path='/AllCampus' element={<AllCampus />} />
        <Route path='/AllStudents' element={<AllStudents />} />
      </Routes>
    </div>


  )
};

export default App;