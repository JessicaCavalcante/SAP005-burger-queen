import React from 'react';
import { Logout } from '../../components/logout';
import { NavTabs } from '../../components/products/tab/index.js';
import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

export const Service = () => {

  let quote = {
    "client": "",
    "table": "",
    "products": []
  };


  const addProductToQuote = (data) => {
    if (data.client) {
      quote.client = data.client;
    }
    if (data.table) {
      quote.table = data.table;
    }
    if (data.product) {
      quote.products = quote.products.filter(product => product.id !== data.product.id);
      if (data.product.qtd > 0) {
        quote.products.push(data.product);
      }
    }
    localStorage.setItem('order', JSON.stringify(quote));
    console.log(quote);
  };


  return (
    <div>
      Página em construção
      <Logout />
    <Container style={{width: '84vw'}}>
      <Box component="div" style={{marginBottom: '1rem'}}>
        <TextField label="Nome" variant="outlined" type="text" required fullWidth  onChange={(event) => addProductToQuote({'client': event.target.value})} style={{marginBottom: '0.5rem'}} />
        <TextField label="Número da Mesa" variant="outlined" type="number" required fullWidth onChange={(event) => addProductToQuote({'table': event.target.value})} />
      </Box>
      <NavTabs addProductToQuote={addProductToQuote} />
    </Container>
    </div>
  )
};
  