import React,{Component,Fragment} from 'react';
import Header from './components/Header';
import Lista from './components/ListaNoticias';
  class App extends Component {
    state = {
      articles:[]
      }
    async componentDidMount(){
     this.consultarNoticias();
    }
    consultarNoticias=async () =>{
      const url=`https://newsapi.org/v2/top-headlines?country=mx&
      category=general&apiKey=5f6300b8143942a4945210dcc5afec8f`;
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
        <Lista
        noticias={this.state.articles}
        />
        </div>
      </Fragment> );
    }
  }
   
  export default App;