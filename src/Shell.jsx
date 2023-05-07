import Home from "./Home";
import Navbar from "./component/Navbar";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
const Shell = () => {
    return(
        <>
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route index element={<Home />} />
                
            </Routes>
            </BrowserRouter>
        </>
    );
};
export default Shell;
