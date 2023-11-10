import { Link } from 'react-router-dom';
import tarjetasPng from '../../imgs/pngegg.png'

function Footer() {
    return (
        <>
            <section className="footer-nav">
                <h2 className="footer-nav-titulo">Navegacion</h2>
                <Link to="/"> Inicio </Link>
                <Link to="/productos">Productos</Link>
                <Link to="/productos/buzos"> Buzos </Link>
                <Link to="/productos/remeras"> Remeras </Link>
                <Link to="/productos/pantalones"> Pantalones </Link>
                <Link to="/Contacto"> Contacto </Link>
            </section>

            <section className="footer-redes">
                <h2 className="redes-titulo">Redes sociales</h2>
                <ul className="redes-lista">
                    <li className="redes-ig">Instagram <i className="bi bi-instagram"></i></li>
                    <li className="redes-fb">Facebook <i className="bi bi-facebook"></i></li>
                    <li className="redes-tw">Twitter <i className="bi bi-twitter"></i></li>
                </ul>
            </section>

            <section className="footer-pagos">
                <h2 className="pagos-titulo"> Medios de pago </h2>
                <img src={tarjetasPng} className="pagos-img" alt="tarjetas de credito que se aceptan"/>
            </section>

            <section className="footer-email">
                <h2 className="email-titulo">Ingresa tu mail para recibir descuentos únicos</h2>
                <div className="email-div-formulario">
                    <form id="formulario-email">
                        <input type="email" id="email-recuadro" />
                            <input id="email-enviar" type="submit" value="Enviar" />
                    </form>
                </div>
            </section>

            <section className="footer-copyright">
                <p className="copyright-texto">
                    <i className="bi bi-c-circle"></i> Todos los derechos reservados Vintage del sur
                </p>
            </section>
        </>
    )
}

export default Footer