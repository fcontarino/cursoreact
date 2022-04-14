import React from "react";

class Formulario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: '',
            clave: ''
        }
    }

    AsignarEstados = (atributo, valor) => { //(usuario,fcontarino)
        let estado = {};
        estado[atributo] = valor; //estado=(usuario:fcontarino)
        this.setState(estado);
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        id="usuario"
                        name="usuario"
                        required={true}
                        value={this.state.usuario}
                        onChange={(e) => { this.AsignarEstados(e.target.name, e.target.value) }}
                    />
                    <br /> <br />
                    <input
                        type="password"
                        id="clave"
                        name="clave"
                        required={true}
                        value={this.state.clave}
                        onChange={(e) => { this.AsignarEstados(e.target.name, e.target.value) }}

                    />
                    <br /> <br />
                    <button>Enviar</button>
                    <button>Cancelar</button>
                </form>

            </div>
        );
    }
}

export default Formulario;