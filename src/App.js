import React,{Component,Fragment} from 'react';
import Header from './components/Header';
import Lista from './components/ListaNoticias';
import Buscador from './components/Formulario';
  class App extends Component {
    state = {
      articles:[]
      }
    async componentDidMount(){
     this.consultarNoticias();
    }
    consultarNoticias=async (categoria='general') =>{
      
      const url=`https://newsapi.org/v2/top-headlines?country=mx&
      category=${categoria}&apiKey=5f6300b8143942a4945210dcc5afec8f`;
      const respuesta=await fetch(url);
      const {articles}=await respuesta.json();

      this.setState({
        articles
      })
    
    }

    render() { 
      return ( <Fragment>
        <Header
        titulo='Noticias desde News API'
        />
        <div className='container white contenedor-noticias'>
          <Buscador
          consultarNoticias={this.consultarNoticias}
          />
        <Lista
        noticias={this.state.articles}
        />
        </div>
      </Fragment> );
    }
  }
   
  export default App;