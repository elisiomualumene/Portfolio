import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Experience from './Pages/Experience'
import Contact from './Pages/Contact'
import Menu from './Layout/Menu'


function App() {
  return (
    <BrowserRouter>
    <div>
       <Menu/>
    </div>
    
    <Routes>
      <Route index element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/experience" element={<Experience/>}/>
    <Route path="/contact" element={<Contact/>}/>
    </Routes>


    </BrowserRouter>
  );
}

export default App;
