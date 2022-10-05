import React, { Component } from "react";
import styled from "styled-components";
import lixo from "../lixo.png";

const ContainerP = styled.form`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;
const ContainerInput = styled.div`
  width: 80vw;
  height: 10vh;
  display: flex;
  justify-content: center;
`;
const ContainerLista = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: darkviolet;
  width: 70vw;
`;

const ContainerLabel = styled.div`
  display: flex;
  background-color: pink;
  justify-content: space-evenly;
  width: 100%;
  height: 10vh;
`;
const Label = styled.label`
  width: 70%;
`;

const Img = styled.img`
  width: 10px;
  height: 20px;
  cursor: pointer;
`;
const ImgLixo = styled.img`
  width: 20px;
  cursor: pointer;
`;

export default class ToDo extends Component {
  state = {
    tarefa: "",
    lista: []
  };

  handleChange = (e) => {
    this.setState({ tarefa: e.target.value });
  };

  add = () => {
   
    const { tarefa, lista } = this.state;
    if (tarefa !== "") {
      this.setState({
        lista: lista.concat({
          tarefa,
          id: Date.now()
        }),
        tarefa: ""
      });
    }
  };

  remove = (id) => {
    this.setState({
      lista: this.state.lista.filter((item) => item.id !== id)
    });
  };
  removeAll = () => {
    this.setState({
      lista: this.state.lista.filter((item) => item.lista)
    });
  };

  render() {
    return (
      <ContainerP onSubmit={(ev)=> ev.preventDefault()} >
        {this.props.children}

        <ContainerInput>
          <input value={this.state.tarefa} onChange={this.handleChange} />
          <button onClick={this.add}>INSERIR </button>

          <ImgLixo
            onClick={() => this.removeAll()}
            src={lixo}
            alt="iconde de pá "
          />
        </ContainerInput>
        <ContainerLista>
          {this.state.lista.map((item) => (
            <ContainerLabel>
              <input onClick={this.Riscar} for="tipo" type="checkbox" />
              <Label id="tipo">{item.tarefa}</Label>

              <Img
                onClick={() => this.remove(item.id)}
                src={lixo}
                alt="iconde de pá "
              />
            </ContainerLabel>
          ))}
        </ContainerLista>
      </ContainerP>
    );
  }
}
