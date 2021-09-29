import React, { useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { makeStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Table } from '../components/shared/table';

const useStyles = makeStyles(theme => ({
  label: {
    color: theme.palette.grey[600],
    display: 'block',
    fontWeight: theme.typography.fontWeightMedium,
    marginBottom: '50px',
  },
}));

export const Rates = () => {
  const { baseCurrency, currencies, updatedAt, refreshTime, ...state } = useStoreState(state => state);
  const getCurrencyRates = useStoreActions(actions => actions.getCurrencyRates);
  const { label } = useStyles();

  useEffect(() => {
    getCurrencyRates();
  }, []);

  useEffect(() => {
    const refreshInterval = setInterval(() => {
      getCurrencyRates();
    }, refreshTime);

    return () => {
      console.log('>>>>> cleanup');
      clearInterval(refreshInterval);
    };
  }, []);

  return (
    <>
      <h2>Base Currency: {baseCurrency}</h2>
      <label className={label}>Updated At: {updatedAt && updatedAt.toLocaleString()}</label>
      <Table colsLabel={['Currency', 'Rate']}>
        {currencies.length &&
          currencies.map((cur, idx) => (
            <TableRow key={idx}>
              <TableCell align="center">{cur}</TableCell>
              <TableCell align="center">{state[cur]}</TableCell>
            </TableRow>
          ))}
      </Table>
    </>
  );
};
