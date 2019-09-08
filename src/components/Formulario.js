import React,{Component} from 'react';
import PropTypes from 'prop-types';
class Formulario extends Component {
    state = { 
        categoria:'general'
     }
     cambiarCategoria=e=>{
         this.setState({
             categoria:e.target.value
         },()=>{
            this.props.consultarNoticias(this.state.categoria);
         })
        
     }


    render() { 
        return (  
            <div className='buscador'>
                <div className='col s12 m8 offset-m2'>
                    <form>
                        <h2>Busca Noticias por categoria</h2>
                        <div className='input-field col s12 offset-m2'>
                        <select
                        onChange={this.cambiarCategoria}
                        >
                            <option value='general'>General</option>
                            <option value='sports'>Deportes</option>
                            <option value='health'>Salud</option>
                            <option value='technology'>Tecnologia</option>
                            <option value='science'>Ciencia</option>
                            <option value='entertainment'>Entretenimiento</option>
                            <option value='business'>Negocios</option>
                        </select>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
 Formulario.protoType={
    consultarNoticias:PropTypes.func.isRequired
}
export default Formulario;