import { Routes, Route } from "react-router-dom";
import Card from "../components/Card/Card";



export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Card />} />
            {/* route error -> / y route notfound crear archivos routes.jsx-> * */}
        </Routes>
    );
};


