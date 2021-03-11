import React, {useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Modal } from '../../modal/index.js';
import { AlertCustom } from '../../alert/index.js';

const useStyles = makeStyles({
  table: {
    minWidth: 500
  }
});

export const OrderResume =  (props) => {
  const [reject, setReject] = useState('');
  const [confirm, setConfirm] = useState('');
  const classes = useStyles();

  const formatOrder = () => {
    let order =  {
      "client": props.client,
      "table": props.table,
      "products": [],
    };
    
    const newProduct = Object.entries(props.products);
    newProduct.map((product) => (
      order['products'].push({'id': product[1].id, 'qtd': product[1].qtd})
    ));
    return order;
  };

  const handleCreateOrder = () => {
    const token = localStorage.getItem('token');
    const orders = formatOrder();
    fetch('https://lab-api-bq.herokuapp.com/orders', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json",
        "Authorization": token,
      },
      body: JSON.stringify(orders)
    }).then(response => {
      if (response.status === 200) {
        props.addProductToQuote({'cancel': true});
        setConfirm(response);
        return;
      } else {
        setReject(response);
        return;
      }
    })
    .catch(() => {
      alert('Algo deu errado. Por favor, tente novamente.');
    })
  };

  const cancelOrder = () => {
    props.addProductToQuote({'cancel': true})
  };
  
  return (
    <div>
      {reject && (
        <AlertCustom
          severity="info"
          message="Necessário preencher todos os campos obrigatórios, como: nome, mesa e pedido." 
        />
      )}
      {confirm && (
        <AlertCustom
          severity="success"
          message="Pedido confirmado!"
        />
      )}
      <TableContainer component={Paper} style={{width: '100%', marginLeft: '0px', marginRight: '0px'}}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align="left" colSpan={5} style={{fontWeight: 'bolder', backgroundColor: '#8bc34a', color: '#fff', fontSize:'1rem', textAlign: 'center'}}>
                Pedidos
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Opções</TableCell>
              <TableCell align="left">Quantidade</TableCell>
              <TableCell align="left">Preço Unitário</TableCell>
              <TableCell align="left">Total do produto</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {
              !props.products ? {} : Object.keys(props.products).map((index) => (
            <TableRow key={index}>
              <TableCell>{props.products[index].complement ? props.products[index].name + " " + props.products[index].flavor + " adicional " + props.products[index].complement : props.products[index].flavor === null && props.products[index].complement === null ? props.products[index].name : props.products[index].name + " " + props.products[index].flavor}</TableCell>
              <TableCell align="left">{props.products[index].qtd}</TableCell>
              <TableCell align="left">{props.products[index].price + ',00'}</TableCell>
              <TableCell align="left">{props.products[index].qtd * props.products[index].price + ',00'}</TableCell>
              <TableCell align="left">
                <IconButton onClick={() => props.addProductToQuote({'product': {'id': index, 'qtd': 0 }})}>
                  <DeleteIcon/>
                </IconButton>
              </TableCell>
            </TableRow>
              ))
            }
            <TableRow>
              <TableCell colSpan={3} style={{fontWeight: 'bolder'}}>TOTAL:</TableCell>
              <TableCell colSpan={2}>{!props.products ? {} : props.total + ',00'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} align="right">
                <Modal
                  variant="contained"
                  titleButton="Cancelar Pedido"
                  title="Cancelar Pedido"
                  content="Tem certeza que deseja cancelar o pedido ?"
                  callback={cancelOrder}
                />
              </TableCell>
              <TableCell colSpan={2} align="left">
                <Modal
                  variant="contained"
                  color="primary"
                  titleButton="Preparar"
                  title="Confirmar Pedido"
                  content="Tem certeza que deseja enviar o pedido para preparo ?"
                  callback={handleCreateOrder}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
