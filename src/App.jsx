import { Navigate, Route, Routes } from "react-router-dom";

import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { LoginPage } from "./LoginPage";

import { Navbar } from "./Navbar";


export const App = () => {
  return (
    <>
      <h1>App</h1>
      <Navbar />
      <hr />

      {/* 🧠 Pensandolo bien, estas rutas se verían más organizadas en un componente separado */}
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="about" element={ <AboutPage/> } />
        <Route path="login" element={ <LoginPage/> } />

        {/* el comodín en inglés se conoce como wildcard */}
        <Route path="/*" element={ <Navigate to="/" /> } />
      </Routes>
    </>
  )
}
