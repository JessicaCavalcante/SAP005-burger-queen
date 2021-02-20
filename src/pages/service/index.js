import React from 'react';
//import { Link } from 'react-router-dom';
import { Logout } from '../../components/logout';
import { NavTabs } from '../../components/products/tab/index.js';
import Container from '@material-ui/core/Container';

export const Service = () => {
  return (
    <div>
    <p>Página em construção</p>
      <Logout />
    <Container>
      <NavTabs />
    </Container>
    </div>
  )
};
  