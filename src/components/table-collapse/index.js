import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { updateOrderStatus } from "../products/updateOrder.js"


export const TableCollapse = (props) => {
  const [open, setOpen] = useState(false);

  const [status, setStatus] = useState(props.orderDone.status);
  
  const orderStatus = {
    "pending": "Pendente",
    "doing": "Em preparo",
    "done": "Pedido pronto",
    "delivery": "Entregue"
  }

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
          <TableCell align="right">
            <Button variant="contained" color="primary" onClick={() => updateOrderStatus("delivery", props.orderDone.id, setStatus)}>Confirmar Entrega</Button>
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