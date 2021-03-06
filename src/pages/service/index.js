import React, {useState} from 'react';
import { NavTabs } from '../../components/products/tab/index.js';
import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Header } from '../../components/header/index.js';

export const Service = () => {

  const [client, setClient] = useState('');
  const [table, setTable] = useState('');
  const [total, setTotal] = useState(0);
  const[products, setProducts] = useState({});

  const addProductToQuote = (data) => {
    let newObject = {...products};
    if (data.product) {
      delete newObject[data.product.id];
      if (data.product.qtd > 0) {
        newObject[data.product.id] = data.product;
      }
    }
    if (data.cancel) {
      newObject =  {};
      setClient('');
      setTable('');
    }
    setTotal(getTotals(newObject));
    setProducts(newObject);
  };

  const getTotals = (products) => {
    let total = 0;
    for (let index in products) {
      total += products[index].qtd * products[index].price;
    }
    return total;
  };

  return (
    <div>
      <nav>
        <Header />
      </nav>
    <Container style={{width: '88vw'}}>
      <Box component="div" style={{marginBottom: '1rem'}}>
        <TextField label="Nome" variant="outlined" type="text" required fullWidth value={client} onChange={(event) => setClient(event.target.value)} style={{marginBottom: '0.5rem'}} />
        <TextField label="Número da Mesa" variant="outlined" type="number" required fullWidth value={table} onChange={(event) => setTable(event.target.value)} />
      </Box>
      <NavTabs addProductToQuote={addProductToQuote} products={products} client={client} table={table} total={total} />
    </Container>
    </div>
  )
};
  