import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'

function App() {


  return (

    <div>
      <Routes>

        <Route path='/a' element={<Home />} />

        <Route path='/footer' element={<Footer />} />
    {/* route error -> / y route notfound -> * */}

      </Routes>
    </div>

  )
}

export default App
