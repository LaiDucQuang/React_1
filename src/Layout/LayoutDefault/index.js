import { NavLink, Outlet } from "react-router-dom";
import "./LayoutDefault.scss"

function LayoutDefault() {
    const NavActive = (e) => {
        return e.isActive ? "menu__link menu__link--active" : "menu__link";

    }
    return (
        <div className="layout-default">
            <header className="layout-default__header">
                <h1>Anh Quang chơi miniWorld</h1>
                <nav className="menu">
                    <ul>
                        <li><NavLink to="/" className={NavActive}>Home</NavLink></li>
                        <li><NavLink to="/about" className={NavActive}>About</NavLink></li>
                        <li><NavLink to="/contact" className={NavActive}>Contact</NavLink></li>

                        <li className="menu__item--dropdown">
                            <NavLink to="/blog" className={NavActive}>Blog</NavLink>
                            <ul className="submenu">
                                <li><NavLink to="/blog/news" className={NavActive}>News</NavLink></li>
                                <li><NavLink to="/blog/related" className={NavActive}>Related</NavLink></li>
                            </ul>
                        </li>

                        <li><NavLink to="/info-user" className={NavActive}>Info User</NavLink></li>


                    </ul>
                </nav>
            </header>

            <main className="layout-default__main">
                <Outlet />
            </main>

            <footer className="layout-default__footer">
                <p>&copy; 2025 My Website</p>
            </footer>

        </div>
    );
}
export default LayoutDefault;