import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrencies, selectCurrencyPage, selectIsFetching } from '../../redux/currency/selectors';
import { incPageNumber, decPageNumber, getCurrenciesByPage } from '../../redux/currency/actions';
import CurrenciesTable from '../../components/CurrenciesTable/currenciesTable';
import Pagination from '../../components/Pagination/pagination';
import Header from '../../components/Header/header';
import { Preloader } from '../../components/Preloader/preloader';


class HomePage extends Component {
  interval = null;

  componentDidMount() {
    const { getCurrenciesByPage } = this.props;

    getCurrenciesByPage();
    this.interval = setInterval(() => getCurrenciesByPage(), 30000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { getCurrenciesByPage } = this.props;

    if (prevProps.pageNumber !== this.props.pageNumber) {
      clearInterval(this.interval);
      getCurrenciesByPage();
      this.interval = setInterval(() => getCurrenciesByPage(), 30000);
    }

  }

  render() {
    const { currencies, pageNumber, incPageNumber, decPageNumber, isFetching } = this.props;

    if (isFetching) {
      return <Fragment>
        <Header title="Crypto charts" />
        <Preloader />
      </Fragment>
    }

    return <div>
      <Header title="Crypto charts" />
      <CurrenciesTable currencies={currencies} />
      <Pagination
        pageNumber={pageNumber}
        decPageNumber={decPageNumber}
        incPageNumber={incPageNumber}
      />
    </div>
  }
}

const mapStateToProps = createStructuredSelector({
  currencies: selectCurrencies,
  pageNumber: selectCurrencyPage,
  isFetching: selectIsFetching,
});

const mapDispatchToProps = {
  incPageNumber,
  decPageNumber,
  getCurrenciesByPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
