import { Navigate, Route, Routes } from "react-router-dom";

import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { LoginPage } from "./LoginPage";

import { Navbar } from "./Navbar";
import { UserProvider } from "./context/UserProvider";


export const App = () => {

  const routes = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Login', path: '/login' },
  ]


  return (
    <UserProvider>
      <Navbar routes={ routes } />
      <hr />

      {/* 🧠 Pensandolo bien, estas rutas se verían más organizadas en un componente separado */}
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="about" element={ <AboutPage/> } />
        <Route path="login" element={ <LoginPage/> } />

        {/* el comodín en inglés se conoce como wildcard */}
        <Route path="/*" element={ <Navigate to="/" /> } />
      </Routes>
    </UserProvider>
  )
}
