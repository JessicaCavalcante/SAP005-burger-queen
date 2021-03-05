import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { TableCollapse } from '../../table-collapse/index.js';

const useStyles = makeStyles({
  table: {
    minWidth: 500
  }
});

export const ListOrderDone = (props) => {
  const classes = useStyles();
  const [ordersDone, setOrdersDone] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('https://lab-api-bq.herokuapp.com/orders/', {
      method: 'GET',
        headers: {
          'Authorization': token,
        },
      })
      .then(response => response.json())
        .then(result => {
          let newResult;
          if (result.length) {
            console.log('qualquer')
              newResult = result.filter((order) => {
                return order.status === "done";
              })
          }
          setOrdersDone(newResult);
        })
        .catch((error) => {console.log(error)});
  }, []);

  //console.log(ordersDone);

  /*useEffect(() => {
    getData();
  }, []);*/


  return (
    <div>
      <TableContainer component={Paper} style={{width: '100%', marginLeft: '0px', marginRight: '0px'}}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align="left" colSpan={3} style={{fontWeight: 'bolder', backgroundColor: '#8bc34a', color: '#fff', fontSize:'1rem', textAlign: 'center'}}>
                Pedidos
              </TableCell>
            </TableRow>
            </TableHead>
            {
              ordersDone.map((orderDone, index) => (
                <TableCollapse key={index} orderDone={orderDone}  />
              ))
            }
        </Table>
      </TableContainer>
    </div>
  )
}
