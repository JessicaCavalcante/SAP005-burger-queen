import  React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Logout } from '../logout';

export const Header = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{marginBottom:'1rem',backgroundColor:'#3e9920'}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            La Pancita Burger
          </Typography>
          <Logout content="Sair"/>
        </Toolbar>
      </AppBar>
    </div>
  );
}