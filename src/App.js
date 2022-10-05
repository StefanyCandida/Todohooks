import React, { Component } from "react";
import Header from "./component/Header.js";
import Main from "./component/Main.js";
import styled from "styled-components";
import Foto from "./img/mar.png";
import Ninguem from "./img/do.jpeg";

const Div = styled.div`
  background-color: pink;
  height: 100%;
`;

export default class ToDo extends Component {
  state = {
    alguem: Foto
  };
  mudar = () => {
   
    this.setState({
       alguem:
        this.state.alguem === Foto ? /* mudança */ Ninguem : /* condição*/ Foto
    });
  };
  render() {
    return (
      <Div>
        <Header />
        <Main>
          <img src={this.state.alguem} alt="" />
          <button
            onClick={() => {
              this.mudar();
            }}
          >
            {" "}
            Mudar{" "}
          </button>
        </Main>
      </Div>
    );
  }
}
