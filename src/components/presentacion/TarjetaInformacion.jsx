function TarjetaInformacion() {
    return (
        <div id="info-contenedor">
            <div id="info-envios-div">
                <i className="bi bi-truck"></i>
                <div className="info-envios-estructura">
                    <h3 id="info-envios-titulo">ENVIO GRATIS A PARTIR DE $8000</h3>
                    <p id="info-envios-texto">ENVIOS A TODO BUENOS AIRES</p>
                </div>
            </div>

            <div id="info-pagos-div">
                <i className="bi bi-credit-card-fill"></i>
                <div className="info-pagos-estructura">
                    <h3 id="info-pagos-titulo">ABONA CON TARJETA DE CREDITO</h3>
                </div>
            </div>

            <div id="info-wspp-div">
                <i className="bi bi-whatsapp"></i>
                <div className="info-wspp-estructura">
                    <h3 id="info-wspp-titulo">TE AYUDAMOS CON TUS COMPRAS</h3>
                </div>
            </div>
        </div>
    )
}

export default TarjetaInformacion