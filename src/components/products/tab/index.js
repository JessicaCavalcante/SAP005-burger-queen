import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Breakfast } from '../../products/breakfast/index.js';
import { AllDay } from '../../products/all-day/index.js';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box component="div" style={{marginTop: '0.5rem'}}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
}));

export const NavTabs = () => {
  const classes = useStyles();

  const mockApi = () => {

    return [
      {
        "id": 29,
        "name": "Café americano",
        "price": 5,
        "flavor": null,
        "complement": null,
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG",
        "type": "breakfast",
        "sub_type": "breakfast",
        "createdAt": "2021-02-16T13:11:54.173Z",
        "updatedAt": "2021-02-16T13:11:54.173Z"
      },
      {
        "id": 30,
        "name": "Café com leite",
        "price": 7,
        "flavor": null,
        "complement": null,
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/41/Coffee_with_milk_%28563800%29.jpg",
        "type": "breakfast",
        "sub_type": "breakfast",
        "createdAt": "2021-02-16T13:11:54.173Z",
        "updatedAt": "2021-02-16T13:11:54.173Z"
      },
      {
        "id": 31,
        "name": "Misto quente",
        "price": 10,
        "flavor": null,
        "complement": null,
        "image": "https://pressfrom.info/upload/images/real/2019/02/08/misto-quente-perfeito-dicas-para-arrasar-no-lanche__78021_.jpg?content=1",
        "type": "breakfast",
        "sub_type": "breakfast",
        "createdAt": "2021-02-16T13:11:54.173Z",
        "updatedAt": "2021-02-16T13:11:54.173Z"
      },
      {
        "id": 32,
        "name": "Suco de fruta natural",
        "price": 7,
        "flavor": null,
        "complement": null,
        "image": "https://media.gazetadopovo.com.br/viver-bem/2019/06/suco-fruta-acucar-risco-morte-768x512-f107f9a0.jpg",
        "type": "breakfast",
        "sub_type": "breakfast",
        "createdAt": "2021-02-16T13:11:54.173Z",
        "updatedAt": "2021-02-16T13:11:54.173Z"
      },
      {
        "id": 33,
        "name": "Hambúrguer simples",
        "price": 10,
        "flavor": "carne",
        "complement": null,
        "image": "https://www.perdigao.com.br/assets/_images/4850f411315852efc87363480bd7a63fb96da849.png",
        "type": "all-day",
        "sub_type": "hamburguer",
        "createdAt": "2021-02-16T13:11:54.173Z",
        "updatedAt": "2021-02-16T13:11:54.173Z"
      },
      {
        "id": 34,
        "name": "Hambúrguer simples",
        "price": 10,
        "flavor": "frango",
        "complement": null,
        "image": "https://www.perdigao.com.br/assets/_images/4850f411315852efc87363480bd7a63fb96da849.png",
        "type": "all-day",
        "sub_type": "hamburguer",
        "createdAt": "2021-02-16T13:11:54.173Z",
        "updatedAt": "2021-02-16T13:11:54.173Z"
      },
      {
        "id": 35,
        "name": "Hambúrguer simples",
        "price": 10,
        "flavor": "vegetariano",
        "complement": null,
        "image": "https://www.perdigao.com.br/assets/_images/4850f411315852efc87363480bd7a63fb96da849.png",
        "type": "all-day",
        "sub_type": "hamburguer",
        "createdAt": "2021-02-16T13:11:54.173Z",
        "updatedAt": "2021-02-16T13:11:54.173Z"
      },
      {
        "id": 36,
        "name": "Hambúrguer simples",
        "price": 11,
        "flavor": "carne",
        "complement": "queijo",
        "image": "https://www.perdigao.com.br/assets/_images/4850f411315852efc87363480bd7a63fb96da849.png",
        "type": "all-day",
        "sub_type": "hamburguer",
        "createdAt": "2021-02-16T13:11:54.173Z",
        "updatedAt": "2021-02-16T13:11:54.173Z"
      },
      {
        "id": 37,
        "name": "Hambúrguer simples",
        "price": 11,
        "flavor": "frango",
        "complement": "queijo",
        "image": "https://www.perdigao.com.br/assets/_images/4850f411315852efc87363480bd7a63fb96da849.png",
        "type": "all-day",
        "sub_type": "hamburguer",
        "createdAt": "2021-02-16T13:11:54.173Z",
        "updatedAt": "2021-02-16T13:11:54.173Z"
      },
      {
        "id": 38,
        "name": "Hambúrguer simples",
        "price": 11,
        "flavor": "vegetariano",
        "complement": "queijo",
        "image": "https://www.perdigao.com.br/assets/_images/4850f411315852efc87363480bd7a63fb96da849.png",
        "type": "all-day",
        "sub_type": "hamburguer",
        "createdAt": "2021-02-16T13:11:54.173Z",
        "updatedAt": "2021-02-16T13:11:54.173Z"
      },
      {
        "id": 39,
        "name": "Hambúrguer simples",
        "price": 11,
        "flavor": "carne",
        "complement": "ovo",
        "image": "https://www.perdigao.com.br/assets/_images/4850f411315852efc87363480bd7a63fb96da849.png",
        "type": "all-day",
        "sub_type": "hamburguer",
        "createdAt": "2021-02-16T13:11:54.173Z",
        "updatedAt": "2021-02-16T13:11:54.173Z"
      },
      {
        "id": 40,
        "name": "Hambúrguer simples",
        "price": 11,
        "flavor": "frango",
        "complement": "ovo",
        "image": "https://www.perdigao.com.br/assets/_images/4850f411315852efc87363480bd7a63fb96da849.png",
        "type": "all-day",
        "sub_type": "hamburguer",
        "createdAt": "2021-02-16T13:11:54.173Z",
        "updatedAt": "2021-02-16T13:11:54.173Z"
      },
      {
        "id": 41,
        "name": "Hambúrguer simples",
        "price": 11,
        "flavor": "vegetariano",
        "complement": "ovo",
        "image": "https://www.perdigao.com.br/assets/_images/4850f411315852efc87363480bd7a63fb96da849.png",
        "type": "all-day",
        "sub_type": "hamburguer",
        "createdAt": "2021-02-16T13:11:54.173Z",
        "updatedAt": "2021-02-16T13:11:54.173Z"
      },
      {
        "id": 42,
        "name": "Hambúrguer duplo",
        "price": 15,
        "flavor": "carne",
        "complement": null,
        "image": "https://www.perdigao.com.br/assets/_images/4850f411315852efc87363480bd7a63fb96da849.png",
        "type": "all-day",
        "sub_type": "hamburguer",
        "createdAt": "2021-02-16T13:11:54.173Z",
        "updatedAt": "2021-02-16T13:11:54.173Z"
      },
      {
        "id": 43,
        "name": "Hambúrguer duplo",
        "price": 15,
        "flavor": "frango",
        "complement": null,
        "image": "https://www.perdigao.com.br/assets/_images/4850f411315852efc87363480bd7a63fb96da849.png",
        "type": "all-day",
        "sub_type": "hamburguer",
        "createdAt": "2021-02-16T13:11:54.173Z",
        "updatedAt": "2021-02-16T13:11:54.173Z"
      },
      {
        "id": 44,
        "name": "Hambúrguer duplo",
        "price": 15,
        "flavor": "vegetariano",
        "complement": null,
        "image": "https://www.perdigao.com.br/assets/_images/4850f411315852efc87363480bd7a63fb96da849.png",
        "type": "all-day",
        "sub_type": "hamburguer",
        "createdAt": "2021-02-16T13:11:54.173Z",
        "updatedAt": "2021-02-16T13:11:54.173Z"
      },
      {
        "id": 45,
        "name": "Hambúrguer duplo",
        "price": 16,
        "flavor": "carne",
        "complement": "ovo",
        "image": "https://www.perdigao.com.br/assets/_images/4850f411315852efc87363480bd7a63fb96da849.png",
        "type": "all-day",
        "sub_type": "hamburguer",
        "createdAt": "2021-02-16T13:11:54.173Z",
        "updatedAt": "2021-02-16T13:11:54.173Z"
      },
      {
        "id": 46,
        "name": "Hambúrguer duplo",
        "price": 16,
        "flavor": "frango",
        "complement": "ovo",
        "image": "https://www.perdigao.com.br/assets/_images/4850f411315852efc87363480bd7a63fb96da849.png",
        "type": "all-day",
        "sub_type": "hamburguer",
        "createdAt": "2021-02-16T13:11:54.173Z",
        "updatedAt": "2021-02-16T13:11:54.173Z"
      },
      {
        "id": 47,
        "name": "Hambúrguer duplo",
        "price": 16,
        "flavor": "vegetariano",
        "complement": "ovo",
        "image": "https://www.perdigao.com.br/assets/_images/4850f411315852efc87363480bd7a63fb96da849.png",
        "type": "all-day",
        "sub_type": "hamburguer",
        "createdAt": "2021-02-16T13:11:54.173Z",
        "updatedAt": "2021-02-16T13:11:54.173Z"
      },
      {
        "id": 48,
        "name": "Hambúrguer duplo",
        "price": 16,
        "flavor": "carne",
        "complement": "queijo",
        "image": "https://www.perdigao.com.br/assets/_images/4850f411315852efc87363480bd7a63fb96da849.png",
        "type": "all-day",
        "sub_type": "hamburguer",
        "createdAt": "2021-02-16T13:11:54.173Z",
        "updatedAt": "2021-02-16T13:11:54.173Z"
      },
      {
        "id": 49,
        "name": "Hambúrguer duplo",
        "price": 16,
        "flavor": "frango",
        "complement": "queijo",
        "image": "https://www.perdigao.com.br/assets/_images/4850f411315852efc87363480bd7a63fb96da849.png",
        "type": "all-day",
        "sub_type": "hamburguer",
        "createdAt": "2021-02-16T13:11:54.173Z",
        "updatedAt": "2021-02-16T13:11:54.173Z"
      },
      {
        "id": 50,
        "name": "Hambúrguer duplo",
        "price": 16,
        "flavor": "vegetariano",
        "complement": "queijo",
        "image": "https://www.perdigao.com.br/assets/_images/4850f411315852efc87363480bd7a63fb96da849.png",
        "type": "all-day",
        "sub_type": "hamburguer",
        "createdAt": "2021-02-16T13:11:54.173Z",
        "updatedAt": "2021-02-16T13:11:54.173Z"
      },
      {
        "id": 51,
        "name": "Batata frita",
        "price": 5,
        "flavor": null,
        "complement": null,
        "image": "https://s2.glbimg.com/6TYFXwek9ZpNXFeOzas09KizMKk=/0x0:1280x853/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/T/K/Hh8h2GR96v392DAkAqyA/912c9713-321e-4dfd-bca9-888c05c5ce50.jpeg",
        "type": "all-day",
        "sub_type": "side",
        "createdAt": "2021-02-16T13:11:54.173Z",
        "updatedAt": "2021-02-16T13:11:54.173Z"
      },
      {
        "id": 52,
        "name": "Anéis de cebola",
        "price": 5,
        "flavor": null,
        "complement": null,
        "image": "https://www.delonghi.com/Global/recipes/multifry/103.jpg",
        "type": "all-day",
        "sub_type": "side",
        "createdAt": "2021-02-16T13:11:54.173Z",
        "updatedAt": "2021-02-16T13:11:54.173Z"
      },
      {
        "id": 53,
        "name": "Água 500mL",
        "price": 5,
        "flavor": null,
        "complement": null,
        "image": "https://i2.wp.com/maprint.com.br/wp-content/uploads/2017/08/garrafa-de-agua-mineral-500ml.png?fit=400%2C400&ssl=1",
        "type": "all-day",
        "sub_type": "drinks",
        "createdAt": "2021-02-16T13:11:54.173Z",
        "updatedAt": "2021-02-16T13:11:54.173Z"
      },
      {
        "id": 54,
        "name": "Água 750mL",
        "price": 7,
        "flavor": null,
        "complement": null,
        "image": "https://i2.wp.com/maprint.com.br/wp-content/uploads/2017/08/garrafa-de-agua-mineral-500ml.png?fit=400%2C400&ssl=1",
        "type": "all-day",
        "sub_type": "drinks",
        "createdAt": "2021-02-16T13:11:54.173Z",
        "updatedAt": "2021-02-16T13:11:54.173Z"
      },
      {
        "id": 55,
        "name": "Refrigerante 500mL",
        "price": 5,
        "flavor": null,
        "complement": null,
        "image": "https://www.abcdacomunicacao.com.br/wp-content/uploads/refri.png",
        "type": "all-day",
        "sub_type": "drinks",
        "createdAt": "2021-02-16T13:11:54.173Z",
        "updatedAt": "2021-02-16T13:11:54.173Z"
      },
      {
        "id": 56,
        "name": "Refrigerante 750mL",
        "price": 7,
        "flavor": null,
        "complement": null,
        "image": "https://www.abcdacomunicacao.com.br/wp-content/uploads/refri.png",
        "type": "all-day",
        "sub_type": "drinks",
        "createdAt": "2021-02-16T13:11:54.173Z",
        "updatedAt": "2021-02-16T13:11:54.173Z"
      }
    ]
  }

  

  const mockApiForeach = () => {
    let newResponse = {
      "breakfast": [],
      "all-day": {
        "hamburguer": [],
        "side": [],
        "drinks": [],
      },
    };
    
    mockApi().forEach((product) => {
      if (product.type === "breakfast") {
        newResponse['breakfast'].push(product);
        return;
      }
      if (product.sub_type === "side" || product.sub_type === "drinks") {
        newResponse['all-day'][product.sub_type].push(product);
        return;
      }
      newResponse['all-day'][product.sub_type].push(product);
      return;
      
    })
    return newResponse;
  }

  const dataProducts = mockApiForeach();


  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{color: '#fff', backgroundColor: '#8bc34a'}}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Café da manhã" href="/drafts" {...a11yProps(0)} />
          <LinkTab label="Durante o dia" href="/trash" {...a11yProps(1)} />
          <LinkTab label="Resumo de Pedido" href="/spam" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Breakfast products={dataProducts['breakfast']}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <AllDay products={dataProducts['all-day']} />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Breakfast />
      </TabPanel>
    </div>
  );
}