import { NavLink } from "react-router-dom";
const Nav = () =>{
    return (
        <nav>
            <div className="holder">
                <ul>
                    <li><NavLink to="/" className={({isActive}) =>isActive ? "activo" : undefined}>Home</NavLink></li>
                    <li><NavLink to="/eventos" className={({isActive}) =>isActive ? "activo" : undefined}>Tipos de Eventos</NavLink></li>
                    <li><NavLink to="/novedades" className={({isActive}) =>isActive ? "activo" : undefined}>Novedades</NavLink></li>
                    <li><NavLink to="/contacto" className={({isActive}) =>isActive ? "activo" : undefined}>Contacto</NavLink></li>
                </ul>
            </div>
        </nav>  
        );
}
export default Nav;