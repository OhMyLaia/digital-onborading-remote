import { Routes, Route } from "react-router-dom";
import { SliderView } from "../../src/views/slider-view.jsx"



export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<SliderView />} />
            <Route path='/:slug' element={<SliderView />} />
            {/* route error -> / y route notfound crear archivos routes.jsx-> * */}
        </Routes>
    );
};
