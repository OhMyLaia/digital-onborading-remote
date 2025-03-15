import './App.css';
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/Router";
// import database from "./database.json"
// import { useEffect, useState } from 'react';


function App() {

  return (
    <BrowserRouter>
    <AppRoutes />
    </BrowserRouter>
  )
}

export default App;