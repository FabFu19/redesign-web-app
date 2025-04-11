import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home }from "./views/home.jsx";
import { Navbar } from "./components/navbar.jsx";
import { Footer } from "./components/footer.jsx";

const App = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes> 
            <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
};

export default App;