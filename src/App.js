import React, { Component } from 'react';
import Header from './componentes/Header';


class App extends Component {


  componentDidMount(){
    this.consultarNoticias();
  }

  consultarNoticias = () => {
    let url = 'http://newsapi.org/v2/top-headlines?country=mx&category=general&apiKey=008fd843d4f44c408ef43ee2858f13de';
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
 