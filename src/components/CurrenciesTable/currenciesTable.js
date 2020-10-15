import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const TH = styled.th`
  border-radius: 15px;
  font-family: Roboto-Bold;
  font-size: 14px;
  color: #333333;
  line-height: 1.4;
  width: 30%;
  padding: 10px 10px;
  background-color: rgba(34, 139, 34);
  color: white;
`;

const TD = styled.td`
  color: rgba(92, 102, 93);
  font-family: Roboto-Medium;
  font-size: 15px;
  line-height: 1.4;
  padding: 5px 10px;
  text-align: center;
  background: rgba(220, 250, 225);
`;

const TR = styled.tr`
  border-bottom: 1px solid #f2f2f2;

  &:ntd-child(even) {
    background-color: #f2f2f2;
  }
`;

class CurrenciesTable extends Component {
  render() {
    const formatter = new Intl.NumberFormat("en", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });
    const { currencies } = this.props;
    let color;
    return (
      <Container>
        <table>
          <thead>
            <TR>
              <TH>Number</TH>
              <TH>Name</TH>
              <TH>Symbol</TH>
              <TH>Price</TH>
              <TH>Market Cap</TH>
              <TH>24h</TH>
            </TR>
          </thead>
          <tbody>
            {currencies.map(
              (currency) => (
                (color = currency.change > 0 ? "green" : "red"),
                (
                  <TR key={currency.id}>
                    <TD>{currency.id}</TD>
                    <TD>{currency.name}</TD>
                    <TD>
                      <Link to={`/currency/${currency.symbol}`}>
                        {currency.symbol}
                      </Link>
                    </TD>
                    <TD>{formatter.format(currency.price)}</TD>
                    <TD>{formatter.format(currency.marketCap)}</TD>
                    <TD style={{ color: color }}>
                      {currency.change.toFixed(2)}
                    </TD>
                  </TR>
                )
              )
            )}
          </tbody>
        </table>
      </Container>
    );
  }
}

export default CurrenciesTable;
