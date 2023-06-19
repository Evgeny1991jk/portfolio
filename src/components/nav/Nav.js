import "./style.css";

import {NavLink} from "react-router-dom";

const Nav = () => {

    const activeLink = "nav-list__link nav-list__link--active";
    const nonActiveLink = "nav-list__link";

    return (
    <nav className="nav">
        <div className="container">
            <div className="nav-row">
                <NavLink to="/" className="logo">
                    <strong>Evgenii Burkov</strong><em> The Portfolio</em>
                </NavLink>
                <ul className="nav-list">
                    <li className="nav-list__item">
                        <NavLink to="/projects" className={({isActive}) => isActive ? activeLink : nonActiveLink}>
                            My Projects
                        </NavLink>
                    </li>
                    <li className="nav-list__item">
                        <NavLink to="/skills" className={({isActive}) => isActive ? activeLink : nonActiveLink}>
                            My Skills
                        </NavLink>
                    </li>
                    <li className="nav-list__item">
                        <NavLink to="/contacts" className={({isActive}) => isActive ? activeLink : nonActiveLink}>
                            My Contacts
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
}
 
export default Nav;