import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const H1 = styled.h1`
  display: flex;
  margin: 0;
  padding: 20px 0;
  color: #ffffff;
  justify-content: center;
  flex-grow: 1;
`;

const IMG = styled.img`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  padding: 5px;
  background: rgba(34, 139, 34);
`;

const Container = styled.div`
  border-radius: 20px;
  display: flex;
  margin: 1% 7% 1% 7%;
  padding: 0 20px;
  align-items: center;
  background: rgb(34, 139, 34);
  
`;
class Header extends Component {
  render() {
    const { title, goBack } = this.props;

    return (
      <Container>
        {goBack && (
          <Link to="/">
            <IMG src="https://cdn.onlinewebfonts.com/svg/img_137524.png" />
          </Link>
        )}
        <H1>{title}</H1>
      </Container>
    );
  }
}

export default Header;
