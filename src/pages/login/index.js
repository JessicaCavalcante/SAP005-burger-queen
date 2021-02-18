import React, {useState} from 'react';
import { Link , useHistory} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { Box, Typography } from '@material-ui/core';
import ButtonCustom from './button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Alert from "@material-ui/lab/Alert";

export const Login = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
      },
    },
  }));
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState({status: '', message: ''});
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://lab-api-bq.herokuapp.com/auth', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body :`email=${email}&password=${password}`
      
    })
      .then((response) => {
        if (response.status === 400) {
          setResult({status:400, message:'E-mail ou senha inválido!'});
        }
         return response.json()
      })
      .then((json) => {
        console.log(json);
        if (json.token && json.id) {
          localStorage.setItem('token', json.token);
          localStorage.setItem('userId', json.id);
          if (json.role === 'service') {
            return history.push('/service')
          }
          return history.push('/kitchen')
        }
      })
  };

  return (
    <div>
      <Container maxWidth="xs" component="main" style={{ backgroundColor: '#fff', height: '80vh', marginTop: '10vh'}}>
    <Typography component="h1" variant="h4" style={{ fontWeight: 'bolder', color: '#3e9920', marginLeft: '0.5rem' }}>
      La Pancita Burger
    </Typography>
    <Typography component="h2" variant="h5" style={{ fontWeight: 'normal', color: 'black', marginTop: '4vh', marginBottom: '2vh', marginLeft: '0.5rem'}}>
      Bem-vindo(a)!
    </Typography>
    {result.status && (
      <Alert severity="error">{result.message}</Alert>
    )}
    <form className={classes.root} noValidate autoComplete="off">
      <TextField error={(result.status === 400 && !email)} id="outlined-basics" label="E-mail" variant="outlined" type="email" required fullWidth value={email} onChange={(event) => setEmail(event.target.value)} />
      <TextField error={(result.status === 400 && !password)} id="outlined-basicss" label="Senha" variant="outlined" type="password" required fullWidth value={password} onChange={(event) => setPassword(event.target.value)} />
      <ButtonCustom onClick={(event) => handleSubmit(event)} />
      <Box component="p" style={{ marginLeft: '0.5rem', fontSize: '1.2rem'}}>
        <span> Se ainda não possui registro <Link to='/register'> Ir para Registro</Link></span>
      </Box>
      </form>
    </Container>
    </div>
  )
};
  