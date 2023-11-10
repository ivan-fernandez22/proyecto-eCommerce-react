import { useForm } from "react-hook-form"

function Contacto () {

    const { register, handleSubmit } = useForm()

    const enviar = (d) => {
        console.log(d)
    }

    return (
        <>
            <h2 className="titulo-contacto">Contacto</h2>

            <h3 className="titulo-consultas"> Para consultas y reclamos </h3>
            <p className="texto-consultas"> Mandarnos tu consulta rellenando el siguiente formulario </p>

            <form className="formulario-consultas" onSubmit={handleSubmit(enviar)}>
                <label className="labels-contacto"> Tu Email </label> <br/>
                <input type="email" className="inputs-contacto" {...register("email")}/> <br/>

                <label className="labels-contacto"> Tu telefono </label> <br/>
                <input type="phone" className="inputs-contacto" {...register("telefono")}/> <br/>

                <label className="labels-contacto"> Tu consulta </label> <br/>
                <input type="text" className="inputs-contacto" {...register("consulta")}/> <br/>

                <button type="submit" className="btn-contacto-enviar">Enviar</button>
            </form>

            <h3 className="titulo-redes"> Nuestras redes sociales </h3>
            <ul className="redes-lista-contacto">
                <li className="redes-contacto"><i className="bi bi-instagram redes-ig-contacto"></i> Vintage_del_sur</li>
                <li className="redes-contacto"><i className="bi bi-facebook redes-fb-contacto"></i> Vintage del sur</li>
                <li className="redes-contacto"><i className="bi bi-twitter redes-tw-contacto"></i> Vintage_del_sur</li>
            </ul>
        </>
    )
}

export default Contacto