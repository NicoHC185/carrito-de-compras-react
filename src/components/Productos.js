import { Component } from "react";
// import {Producto} from './Producto'
import Producto from './Producto'

const style = {
    productos:{
        display: 'flex',
        flexDirection: ' row',
        justifyContent: "space-between",
        padding:"0 15%"
    }
}

class Productos extends Component{
    render(){
        const { productos, agregarAlCarro} = this.props 
        return(
            <div style={style.productos}>
                {productos.map( producto => 
                <Producto
                    key = {producto.name}
                    agregarAlCarro = {agregarAlCarro}
                    producto = {producto}
                />)}
            </div>
        )
    }
}

export default Productos