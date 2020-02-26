import React, { Component } from 'react';
import Header from './componentes/Header';
import Noticias from './componentes/Noticias';


class App extends Component {

  state = {
    noticias : []
  }

  componentDidMount(){
    this.consultarNoticias();
  }

  consultarNoticias = () => {
    let url = 'http://newsapi.org/v2/top-headlines?country=mx&category=general&apiKey=008fd843d4f44c408ef43ee2858f13de';
  
  fetch(url)
    .then(respuesta => {
      return respuesta.json();
    }) 
    .then(noticias => {
      this.setState({
        noticias : noticias.articles
      })
    })
  }

  render(){
    return (
      <div className="contenedor-app">
        <Header
          titulo= 'Noticias'
        />

<div className="container white contenedor-noticias">
    <Noticias 
        noticias = {this.state.noticias}
      />
</div>
        
      </div>
    );
  }
  
}

export default App;
 