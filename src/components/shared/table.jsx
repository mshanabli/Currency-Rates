import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiTable from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const useStyles = makeStyles(theme => ({
  headCell: {
    color: theme.palette.primary.light,
    fontSize: '1.15rem',
    fontWeight: theme.typography.fontWeightBold,
  },
}));

export const Table = ({ colsLabel = [], children }) => {
  const { headCell } = useStyles();

  return (
    <TableContainer>
      <MuiTable>
        <TableHead>
          <TableRow>
            {colsLabel.map((label, idx) => (
              <TableCell className={headCell} align="center" key={idx}>
                {label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
      </MuiTable>
    </TableContainer>
  );
};
