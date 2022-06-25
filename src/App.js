
import './App.css';
import "./index.css"
import Card from './Components/Card';
import Header from './Components/Header';
import Intro from './Components/Intro';
import {BrowserRouter, Route,Routes} from "react-router-dom";
import Otaku from './Components/Otaku';


function App() {
  return (
    <div className="bg-black w-screen h-screen">
       <Header/>
        {/* <div className='sm:flex sm:row-auto'>
          <Card />
          <Card/>
          <Card/>
        </div>  */}

        <Routes>
          <Route path='/' element={<Intro/>}/>
          <Route path='otakumode' element={<Otaku/>}/>
        </Routes>
    </div>
    
  );
}

export default App;
