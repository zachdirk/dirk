import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home"
import { Olive } from "./pages/olive";

export const Pages = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={Home()}></Route>
                <Route path="/olive" element={Olive()}></Route>
            </Routes>
        </Router>
    )
}