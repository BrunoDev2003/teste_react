import React from "react";
import "./styles.css";

import { Mensagem } from "./components/Mensagem";
export default class App extends React.Component {
  state = {
    mostraMensagem: true,
    mensagemLida: true
  };

  handleClickHideMessage = () => {
    this.setState({ mostraMensagem: !this.state.mostraMensagem });
  };

  handleSeenMessage = () => {
    this.setState({ mensagemLida: !this.state.mensagemLida });
  };

  componentDidUpdate = () => {
    console.log("renderizou algo");
  };
  render() {
    return (
      <div className="App">
        <button onClick={this.handleClickHideMessage}>Esconder Mensagem</button>
        {this.state.mostraMensagem ? <Mensagem /> : <div></div>}
        <Mensagem />
        <p>Oieeeee, quer sair??</p>
        {this.state.mensagemLida ? (
          <p>
            <strong>Mensagem Lida</strong>
          </p>
        ) : (
          <div></div>
        )}

        <button onClick={this.handleSeenMessage}>Marcar como lida</button>
      </div>
    );
  }
}
