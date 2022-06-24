
import './App.css';
import "./index.css"
import Card from './Components/Card';
import Header from './Components/Header';
import Intro from './Components/Intro';

function App() {
  return (
    <div className="bg-black w-screen h-screen">
      <Header/>
        {/* <div className='sm:flex sm:row-auto'>
        <Card />
        <Card/>
        <Card/>
        </div> */}

        <Intro />
    </div>
  );
}

export default App;
