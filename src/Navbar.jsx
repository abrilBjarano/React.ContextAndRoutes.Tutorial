import { NavLink } from "react-router-dom";

// const getNavLinkClass = ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`;
const getNavLinkClass = ({ isActive }) => {
   return `nav-link ${ isActive ? 'active' : '' }`;
}

export const Navbar = ({ routes }) => {

   return (
      <nav className="navbar navbar-expand bg-body-tertiary rounded-3">
      <div className="container-fluid">

         <a className="navbar-brand">Context</a>

         <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

               { routes.map( route => (
                  <NavLink 
                     className={ getNavLinkClass } key={ route.path } to={ route.path }>
                     { route.name }
                  </NavLink>
               ))}               

            </ul>
         </div>
      </div>
   </nav>
   )
}
 