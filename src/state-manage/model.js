import { action, actionOn, thunk } from 'easy-peasy';
import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

export const currencyRates = {
  baseCurrency: 'ILS',
  currencies: ['USD', 'EUR', 'JOD'],
  refreshTime: 60000,
  updatedAt: null,
  USD: 0,
  EUR: 0,
  JOD: 0,
  setCurrencyRates: action((state, payload) => {
    state.currencies.forEach(currency => {
      state[currency] = payload[currency];
    });
  }),
  getCurrencyRates: thunk(async (actions, payload, helpers) => {
    const { baseCurrency } = helpers.getStoreState();

    try {
      const { data } = await axios.get(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`);

      console.log('>>>>> fetch');
      actions.setCurrencyRates(data.conversion_rates);
    } catch (err) {
      console.log(err);
    }
  }),
  onGetCurrencyRates: actionOn(
    actions => actions.getCurrencyRates,
    state => {
      state.updatedAt = new Date();
    }
  ),
};
