import "./App.css";
import "./components/Card/Card.module.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes/Router";


function App() {

  return (
    <div>
      <AppRoutes />
    </div>

  )
}

export default App;
