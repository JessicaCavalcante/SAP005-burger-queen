import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const Logout = () => {
  const history = useHistory();
  const handleLogout = () => {
    if (localStorage.getItem('token')) {
      localStorage.clear();
      return history.push('/')
    }
  }
  return (
    <div>
      <Button variant="contained" onClick={() => handleLogout()} content="Sair">
        <ExitToAppIcon />
      </Button>
    </div>
  )
};
  