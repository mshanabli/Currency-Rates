import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles(theme => ({
  appBar: {
    marginBottom: '50px',
  },
  brand: {
    color: theme.palette.secondary.dark,
    fontFamily: '"Playball", cursive',
    fontSize: '2rem',
    fontWeight: theme.typography.fontWeightMedium,
    marginLeft: '20px',
    textDecoration: 'none',
  },
  tabs: {
    marginLeft: 'auto',
  },
  tab: {
    fontWeight: theme.typography.fontWeightRegular,
    minWidth: '100px',
    textTransform: 'none',
  },
}));

export const Navbar = ({ brandName, navItems }) => {
  const [value, setValue] = useState(0);
  const { appBar, brand, tabs, tab } = useStyles();

  const handleChange = (event, value) => {
    setValue(value);
  };

  return (
    <AppBar className={appBar} position="static">
      <Toolbar disableGutters>
        <NavLink className={brand} to="/" onClick={() => setValue(0)}>
          {brandName}
        </NavLink>
        <Tabs className={tabs} value={value} onChange={handleChange}>
          {navItems.map((navItem, idx) => (
            <Tab className={tab} component={NavLink} to={navItem.to} label={navItem.label} key={idx} />
          ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};
