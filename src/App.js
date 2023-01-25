// import './App.css';
import Home from './Home'
import Header from './Header'
import ReviewList from './ReviewList'
import Contact from './Contact'
import ReviewForm from './ReviewForm';
import { useState, useEffect } from 'react'
import { themeChange } from 'theme-change'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  const [theme, setTheme] = useState("dark");
  const [companyInfo, setCompanyInfo] = useState([])


  document.documentElement.setAttribute('data-theme', theme);

  const onChangeTheme = () => {
    if(theme === 'dark') {
    setTheme("light");
    }
    else if(theme === 'light') {
      setTheme("dark")
    }
  }



  useEffect(() => {
    fetch("http://localhost:3000/companyInfo")
      .then(response => response.json())
      .then(data => setCompanyInfo(data))
    themeChange(false)
  }, [])

  return (
    <div className="App" >
      <Router>
        <Header className="" companyInfo={companyInfo} onChangeTheme={onChangeTheme}/>
        <Routes>
          <Route exact path="/" element={<Home companyInfo={companyInfo} />} />
          <Route path="/reviews" element={<ReviewList />} />
          <Route path="/reviews/new" element={<ReviewForm />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
