import React, { Component } from "react";
import styled from "styled-components";

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  color: purple;
`;

export default class Header extends Component {
  render() {
    return <H1>Lista de Compras</H1>;
  }
}
