import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: rgb(229, 250, 233);
  color: rgba(92, 102, 93);
  border: 0;
  cursor: pointer;
  font-weight: bold;
`;

const Container = styled.div`
  display: flex;
  margin-top: 1%;
  justify-content: center;
`;

class Pagination extends Component {
  render() {
    const { pageNumber, decPageNumber, incPageNumber } = this.props;
    return (
      <Container>
        <Button disabled={pageNumber === 1} onClick={decPageNumber}>
          prev
        </Button>
        <Button>{pageNumber}</Button>
        <Button onClick={incPageNumber}>next</Button>
      </Container>
    );
  }
}

export default Pagination;
