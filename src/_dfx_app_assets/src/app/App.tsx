import React, { FC } from 'react';

import { 
  BrowserRouter as Router, 
  Routes, Route } from 'react-router-dom';

import HomeLayout from '../layout/homeLayout';


const App: FC = () => {

  return(

      <Router>
        <Routes>
          <Route path='/' element={<HomeLayout />}/>
          <Route path='*' element={(<> 404 - Page Not Found</>)} />
        </Routes>
      </Router>

    );
};

export default App;