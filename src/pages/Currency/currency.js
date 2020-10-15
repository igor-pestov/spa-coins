import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import styled from "styled-components";
import DateTime from "luxon/src/datetime";

import Header from "../../components/Header/header";
import { Preloader } from "../../components/Preloader/preloader";
import { getCurrencyBySymbol } from "../../redux/currency/actions";
import {
  selectCurrency,
  selectIsFetching,
} from "../../redux/currency/selectors";

const Container = styled.div`
color:rgba(92,102,93);
  padding: 20px;
  margin: 5% 20% 5% 20%;
`;

const Tag = styled.div`
  height: 32px;
  color: rgba(92, 102, 93);
  background-color: rgba(147, 201, 156);
  border-radius: 16px;
  border: none;
  cursor: default;
  display: inline-flex;
  outline: 0;
  padding: 0;
  margin: 2px 5px 2px 5px;
  font-size: 0.8125rem;
  box-sizing: border-box;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  align-items: center;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  white-space: nowrap;
  border-radius: 16px;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
`;

const TagSpan = styled.span`

  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  padding-left: 12px;
  padding-right: 12px;
  text-overflow: ellipsis;
`;
const DivTag = styled.div`
  margin: 20px 0 20px 0;
`;
class CurrencyPage extends Component {
  interval = null;

  componentDidMount() {
    const {
      match: {
        params: { symbol },
      },
      getCurrencyBySymbol,
    } = this.props;

    getCurrencyBySymbol(symbol);

    this.interval = setInterval(() => getCurrencyBySymbol(symbol), 30000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { currency, isFetching } = this.props;
    if (isFetching) {
      return (
        <Fragment>
          <Header title="Crypto charts" />
          <Preloader />
        </Fragment>
      );
    }

    if (!currency) {
      return null;
    }

    return (
      <Fragment>
        <Header goBack title={currency.name} />
        <Container>
          <div>
            <img src={currency.logo} alt="" />
            <span>{currency.description}</span>
          </div>
          <DivTag>
            {currency["tag-names"] && "Tags:"}
            {currency["tag-names"] &&
              currency["tag-names"].map((tag) => (
                <Tag key={tag}>
                  <TagSpan>{tag}</TagSpan>
                </Tag>
              ))}
          </DivTag>
          <div>
            {currency.category} was added{" "}
            {DateTime.fromISO(currency.date_added).toISODate()}
          </div>
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currency: selectCurrency,
  isFetching: selectIsFetching,
});

const mapDispatchToProps = {
  getCurrencyBySymbol,
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyPage);
