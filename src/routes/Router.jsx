import { Routes, Route } from "react-router-dom";
import Card from "../components/Card";
import Home from "../components/Home";
import Footer from "../components/Footer";



export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/onboarding' element={<Card />} />

            {/* route error -> / y route notfound crear archivos routes.jsx-> * */}
        </Routes>
    );
};


