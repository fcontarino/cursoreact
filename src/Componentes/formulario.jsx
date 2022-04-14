import React from "react";

class Formulario extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            usuario:'',
            clave:''
        }
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
                        onChange={(e)=>{this.setState({usuario:e.target.value})}}
                    />
                    <br /> <br />
                    <input
                        type="password"
                        id="clave"
                        name="clave"
                        required={true}
                        value={this.state.clave}
                        onChange={(e)=>{this.setState({clave:e.target.value})}}
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