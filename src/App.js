
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


 const App =()=> {
  const pagesize = 10;
  /* api_key=process.env.REACT_APP_NEWS_API */
  const api_key='6d9aabc063d84e50890bdc72333c0cff'
  const [progress, setProgress] = useState(0);

    return (
      <div>
        <Router>
          <LoadingBar
            color='#f11946'
            progress={progress}
          />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News  setProgress={setProgress} api_key={api_key} key="general" pagesize={pagesize} country='no' category='general'></News>} />
            <Route exact path="/business" element={<News  setProgress={setProgress} api_key={api_key} key="business" pagesize={pagesize} country='no' category='business'></News>} />
            <Route exact path="/entertainment" element={<News  setProgress={setProgress} api_key={api_key} key="entertainment" pagesize={pagesize} country='no' category='entertainment'></News>} />
            <Route exact path="/health" element={<News  setProgress={setProgress} api_key={api_key} key="health" pagesize={pagesize} country='no' category='health'></News>} />
            <Route exact path="/science" element={<News  setProgress={setProgress} api_key={api_key} key="science" pagesize={pagesize} country='no' category='science'></News>} />
            <Route exact path="/technology" element={<News  setProgress={setProgress} api_key={api_key} key="technology" pagesize={pagesize} country='no' category='technology'></News>} />
            <Route exact path="/sports" element={<News  setProgress={setProgress} api_key={api_key} key="sports" pagesize={pagesize} country='no' category='sports'></News>} />
          </Routes>
        </Router>
      </div>
    )
  
}

export default App