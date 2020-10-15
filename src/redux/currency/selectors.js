import { createSelector } from 'reselect';

const getCurrencyState = state => state.currency;

export const selectCurrencyPage = createSelector(
  getCurrencyState,
  ({ page }) => page,
);

export const selectCurrencyLimit = createSelector(
  getCurrencyState,
  ({ limit }) => limit,
);

export const selectIsFetching = createSelector(
  getCurrencyState,
  ({ isFetching }) => isFetching,
);

export const selectCurrencies = createSelector(
  getCurrencyState,
  ({ currencies }) => {

    return currencies.map(currency => ({
      id: currency.cmc_rank,
      name: currency.name,
      symbol: currency.symbol,
      price: currency.quote.USD.price,
      marketCap: currency.quote.USD.market_cap,
      change: currency.quote.USD.percent_change_24h,
    }));
  },
);

export const selectCurrency = createSelector(
  getCurrencyState,
  ({ activeCurrency }) => activeCurrency,
);

