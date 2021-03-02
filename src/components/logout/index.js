import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { FormatAlignRight } from '@material-ui/icons';

export const Logout = (props) => {
  const history = useHistory();
  const handleLogout = () => {
    if (localStorage.getItem('token')) {
      localStorage.clear();
      return history.push('/')
    }
  }
  return (
  <Button variant="outline" onClick={() => handleLogout()} >
    {props.content}
    <ExitToAppIcon />
  </Button>
  )
};
  