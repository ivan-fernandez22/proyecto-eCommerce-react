import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return (
        <div className="div-nav-carrito">
            <nav className="container-item-list">
                <ul>
                    <li>
                        <a href="a" className="nav-list-item">Inicio</a>
                    </li>
                    <li>
                        <a href="a" className="nav-list-item">Buzos y camperas</a>
                    </li>
                    <li>
                        <a href="a" className="nav-list-item">Camisetas y casacas</a>
                    </li>
                    <li>
                        <a href="a" className="nav-list-item">Pantalones y shorts</a>
                    </li>
                </ul>
            </nav>

            <div>
                <CartWidget />
            </div>
        </div>
    );
};
