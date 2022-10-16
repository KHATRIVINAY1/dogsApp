import logo from './logo.svg';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import './App.css';
//Pages
import Home from "./pages/Home"
import Dog from "./pages/Dog"
import Error from "./pages/Error"
import About from "./pages/About"

// components
import Navbar from "./components/Navbar"


function App() {
  return (<>
  <BrowserRouter>
  <Navbar></Navbar>
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="dog/:breed" element={ <Dog/> } />
        <Route path="*" element={ <Error/> } />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
