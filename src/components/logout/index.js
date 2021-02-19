import React from 'react';
import { useHistory } from 'react-router-dom';
import ButtonCustom from '../button-custom/index.js';

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
    <ButtonCustom onClick={() => handleLogout()} content="Sair" />
    </div>
  )
};
  