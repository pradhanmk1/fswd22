import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
            <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/conatctus' element={<ContactUs/>}/>
          <Route path='/home' element={<Home/>}/>  
        </Routes>
      </Router>
      <Home/>
      <AboutUs/>
      <ContactUs/>
    </div>
  );
}

export default App;
