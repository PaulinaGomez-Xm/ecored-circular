import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./LoginPage";
import CompanyPage from "./CompanyPage";
import MaterialsPage from "./MaterialsPage";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/login">Login</Link> |{" "}
        <Link to="/company">Empresa</Link> |{" "}
        <Link to="/materials">Materiales</Link>
      </nav>

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/materials" element={<MaterialsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;