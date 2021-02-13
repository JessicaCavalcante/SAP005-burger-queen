import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { Box, Typography } from '@material-ui/core';
import HookButton from '../register/hook';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';


export const Register = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
      },
    },
  }));
  const classes = useStyles();

  const [name, setName] = useState(''); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [role, setRole] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://lab-api-bq.herokuapp.com/users/', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `email=${email}&password=${password}&role=${role}&restaurant=LaPancitaBurger&name=${name}`
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if(json.id !== null) {
          setName('');
          setEmail('');
          setPassword('');
          setRole('');
          history.push('/');
        }
      })
  }

  return (
    <div>
    <Container maxWidth="xs" component="main" style={{ backgroundColor: '#fff', height: '80vh', marginTop: '10vh'}}>
    <Typography component="h1" variant="h3" style={{ fontWeight: 'bolder', color: '#3e9920', marginLeft: '0.5rem' }}>
      La Pancita Burger
    </Typography>
    <Typography component="h2" variant="h5" style={{ fontWeight: 'normal', color: 'black', marginTop: '4vh', marginBottom: '2vh', marginLeft: '0.5rem'}}>
      Vamos começar!
    </Typography>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Nome e Sobrenome" variant="outlined" type="text" fullWidth value={name} onChange={(event) => setName(event.target.value)} />
      <TextField id="outlined-basics" label="E-mail" variant="outlined" type="email" required fullWidth value={email} onChange={(event) => setEmail(event.target.value)} />
      <TextField id="outlined-basicss" label="Password" variant="outlined" type="password" required fullWidth value={password} onChange={(event) => setPassword(event.target.value)} />
      <Box component="div">
        <TextField id="select" label="Cargo" select required fullWidth value={role} onChange={(event) => setRole(event.target.value)}>
          <MenuItem value='cozinha'>Cozinha</MenuItem>
          <MenuItem value='salao'>Salão</MenuItem>
        </TextField>
      </Box>
      <HookButton onClick={(event) => handleSubmit(event)} />
      <Box component="p" style={{ marginLeft: '0.5rem', fontSize: '1.2rem'}}>
        <span> Se já possui registro <Link to='/'> Ir para Login</Link></span>
      </Box>
      </form>
    </Container>
    </div>
  )
};