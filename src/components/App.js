import React from 'react';
import { Routes, Route, Link } from "react-router-dom"
import AllCampus from './AllCampus.js';
import AllStudents from './AllStudent.js';
import ACampus from './ACampus.js';
import AStudent from './AStudent.js';

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
        <Route path='/ACampus/:id' element={<ACampus />} />
        <Route path='/AStudent/:id' element={<AStudent />} />
      </Routes>
    </div>


  )
};

export default App;