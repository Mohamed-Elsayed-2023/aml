
import './App.css';

import { Routes, Route } from 'react-router-dom';


import Home from './pages/home';
import Html from "./pages/html"
import Css from "./pages/css"
import Java from "./pages/java"

function App() {

  return (
    < >


      <Routes>
         <Route path='/' element={<Home />}  />
         <Route path='/html' element={<Html />}  />
         <Route path='/css' element={<Css />}  />
         <Route path='/java' element={<Java/>}  /> 
         <Route path='*' element={<h1>not fount</h1>}  />
          





      </Routes>




    </>
  );
}

export default App;
