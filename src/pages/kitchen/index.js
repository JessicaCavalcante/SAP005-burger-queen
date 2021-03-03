import React from 'react';
import { Header } from '../../components/header/index.js';
import Container from '@material-ui/core/Container';
import { CardKitchen } from '../../components/products/card-kitchen/index.js';

export const Kitchen = () => {
  return (
    <div>
      <nav>
        <Header />
      </nav>
      <Container>
        <CardKitchen />
      </Container>
    </div>
  )
};
  