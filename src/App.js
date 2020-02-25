import React, { Component } from 'react';
import Header from './componentes/Header';


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
      <div className="App">
        <Header
          titulo= 'Noticias'
        />
      </div>
    );
  }
  
}

export default App;
 