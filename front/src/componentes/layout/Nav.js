import { NavLink } from "react-router-dom";
// import logo from '../public/img/logo';
const Nav = () => {
  return (
    <nav>
      <div className="holder">
        <ul>
          <li><NavLink to="/" className={({ isActive }) => isActive ? "activo" : undefined}>Home</NavLink></li>
          <li><NavLink to="/eventos" className={({ isActive }) => isActive ? "activo" : undefined}>Eventos</NavLink></li>
          <li><NavLink to="/servicios" className={({ isActive }) => isActive ? "activo" : undefined}>Servicios</NavLink></li>
          <li><NavLink to="/contacto" className={({ isActive }) => isActive ? "activo" : undefined}>Contacto</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;