import './App.css';
import { useState } from 'react';
import Footer from './components/Footer';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Card from './components/Card';

export const tutorialData = [
  {
    title: "Invest a lot of time",
    description: "Minimum 30h a week. If that is not enough, you will have to spend some extra hours. In the beggining, it seems impossible, but you will quickly see your improvements!",
    bgColor: "",
    image: ""
  },
  {
    title: "Code your own projects",
    description: "It is better to invest 10h working on your projects than 10h watching tutorials. Motivation and commitment in your own work will boost and improve your knowledge.",
    bgColor: "",
    image: ""
  },
  {
    title: "Try to rest",
    description: "Resting and disconnecting a bit is vital. This way you will reduce stress and anxiety. You will improve your focus and strenghten what you have learned.",
    bgColor: "",
    image: ""
  },
]

function App() {

  const initialStateFun = () => tutorialData[0];
  const [step, setStep] = useState(initialStateFun);

  return (

    <div>
      <Routes>
        <Route path='/card' element={<Card />} />
        <Route path='/a' element={<Home />} />
        <Route path='/footer' element={<Footer />} />
    {/* route error -> / y route notfound -> * */}

      </Routes>
    </div>

  )
}

export default App
