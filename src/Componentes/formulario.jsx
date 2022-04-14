import React from "react";

class Formulario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: '',
            clave: ''
        }
    }

EnviarFormulario=(e)=>{
    e.preventDefault()
    console.log('Enviando');
    //voy a llamar a mi api enviar la informacion

    this.LimpiarFormulario();
}

LimpiarFormulario = () => {
    this.setState({
        usuario:"",
        clave:""
    })
}

AsignarEstados=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
}

    render() {
        return (
            <div>
                <form onSubmit={this.EnviarFormulario}>
                    <input
                        type="text"
                        id="usuario"
                        name="usuario"
                        required={true}
                        value={this.state.usuario}
                        onChange={this.AsignarEstados}
                    />
                    <br /> <br />
                    <input
                        type="password"
                        id="clave"
                        name="clave"
                        required={true}
                        value={this.state.clave}
                        onChange={this.AsignarEstados}

                    />
                    <br /> <br />
                    <button type="submit">Enviar</button>
                    <button type="reset" onClick={this.LimpiarFormulario}>Cancelar</button>
                </form>

            </div>
        );
    }
}

export default Formulario;