import React from "react";

export class Mensagem extends React.Component {
  componentDidMount = () => {
    console.log("MONTOU!!");
  };

  componentDidUpdate = () => {
    console.log("Atualizou");
  };

  componentWillUnmount = () => {
    console.log("VAI DESMONTAR");
  };
  render() {
    console.log("renderizou");
    return <p>oiieee</p>;
  }
}
