import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
//import TableContainer from "@material-ui/core/TableContainer";
//import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
//import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';


/*const useStyles = makeStyles({
  table: {
    minWidth: 500
  }
});*/

export const TableCollapse = (props) => {
  //const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <TableBody>
        <TableRow>
          <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton> Itens do pedido
          </TableCell>
          <TableCell>Mesa:{props.orderDone.table}</TableCell>
          <TableCell colSpan={3} align="right">
            <Button variant="contained" color="primary">Confirmar Entrega</Button>
          </TableCell>
        </TableRow>
      </TableBody>
      <TableBody>
        <TableRow>
          <TableCell>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Table>
                <TableBody>
                {
                  props.orderDone.Products.map((product, index) => (
                  <TableRow key={index}>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.qtd}</TableCell>
                  </TableRow>
                  ))
                }
                </TableBody>
              </Table>
            </Collapse>
          </TableCell>
        </TableRow>
      </TableBody>
    </React.Fragment>
  )
}