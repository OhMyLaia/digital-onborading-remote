import './App.css';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Card from './components/Card';


function App() {

  const initialStateFun = () => tutorialData[0];
  const [step, setStep] = useState(initialStateFun);

  return (

    <div>
      <Routes>
        <Route path='/card' element={<Card />} />
        <Route path='/a' element={<Home />} />
        <Route path='/footer' element={<Footer />} />
    {/* route error -> / y route notfound crear archivos routes.jsx-> * */}

      </Routes>
    </div>

  )
}

export default App
