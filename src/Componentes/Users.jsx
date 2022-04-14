import React from "react";
import users from '../recursos/users.json';
import Tarjeta from "../Tarjeta";

class Users extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            usuarios : users
        }
    }

    render(){
        return(
            <div>
                {this.state.usuarios.map((e)=>
                <div key={e.id}>
                <Tarjeta correo={e.email}
                descripcion = {e.name}
                usuario={e.username}/></div>)}

            </div>
        );
    }

}

export default Users