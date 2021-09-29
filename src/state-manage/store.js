import { createStore } from 'easy-peasy';
import { currencyRates } from './model';

export const store = createStore(currencyRates);
