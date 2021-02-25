import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Breakfast } from '../../products/breakfast/index.js';
import { AllDay } from '../../products/all-day/index.js';
import { OrderResume } from '../order-resume/index.js';

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

export const NavTabs = (props) => {
  const classes = useStyles();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('https://lab-api-bq.herokuapp.com/products/', {
      method: 'GET',
        headers: {
          'Authorization': token,
        },
      })
      .then(result => result.json())
        .then(result => {
          if (result.code && result.code === 401) {
            result = [];
          }
          setProducts(result)
        }).catch(() => {setProducts([])})
      }, []);


  const formatApi = () => {
    let newResponse = {
      "breakfast": [],
      "all-day": {
        "hamburguer": [],
        "side": [],
        "drinks": [],
      },
    };
    
    products.forEach((product) => {
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


  const dataProducts = formatApi();


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
        <Breakfast products={dataProducts['breakfast']} addProductToQuote={props.addProductToQuote}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AllDay products={dataProducts['all-day']} addProductToQuote={props.addProductToQuote} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <OrderResume />
      </TabPanel>
    </div>
  );
}