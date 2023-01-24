import './App.css';
import Home from './Home'
import About from './About'
import Header from './Header'
import ReviewList from './ReviewList'
import Contact from './Contact'
import ReviewForm from './ReviewForm';
import {useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  const [isDarkMode, setDarkMode] =useState(true)
  

  

  return (
    <div className="App">
      <Router>
        <Header isDarkMode={isDarkMode}/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<ReviewList />} />
          <Route path="/reviews/new" element={<ReviewForm />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
