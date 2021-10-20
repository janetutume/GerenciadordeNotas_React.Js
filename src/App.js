import React,{ Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';
import "./assets/App.css";
import './assets/index.css';

class App extends Component {
  render () {
    return (
      <section className="conteudo">
        <FormularioCadastro/>
        <ListaDeNotas/>
        <h1>hacktoberfest is the best!</h1>
      </section>
    );
  }
}

export default App;
