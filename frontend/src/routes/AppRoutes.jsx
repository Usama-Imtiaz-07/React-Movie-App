import { Routes, Route } from "react-router-dom";
import Favorites from "../pages/Favorites";
import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";



export default function AppRoutes() {
    return(

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/movie/:id" element={<MovieDetails/>}/>
        </Routes>
    )
}