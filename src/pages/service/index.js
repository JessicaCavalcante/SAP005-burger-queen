import React from 'react';
//import { Link } from 'react-router-dom';
import { Logout } from '../../components/logout';
import { NavTabs } from '../../components/products/tab/index.js';
import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

export const Service = () => {
  return (
    <div>
      Página em construção
      <Logout />
    <Container>
      <Box component="div" style={{marginBottom: '1rem'}}>
        <TextField label="Nome" variant="outlined" type="text" required fullWidth style={{marginBottom: '0.5rem'}} />
        <TextField label="Número da Mesa" variant="outlined" type="text" required fullWidth />
      </Box>
      <NavTabs />
    </Container>
    </div>
  )
};
  