import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { updateOrderStatus } from "../products/updateOrder.js"
import { Modal } from '../modal/index.js';


export const TableCollapse = (props) => {
  const [open, setOpen] = useState(false);

  const [statusOrder, setStatusOrder] = useState(props.orderDone.status);

  const confirmOrder = () => {
    updateOrderStatus("delivery", props.orderDone.id, setStatusOrder)
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
          <TableCell>Cliente:{props.orderDone.client_name}</TableCell>
          <TableCell align="right">
            <Modal
              variant="contained"
              color="primary"
              titleButton={statusOrder === "done" ? "Confirmar entrega" : "Entregue"}
              title="Confirmar Entrega"
              content="Deseja confirmar a entrega do pedido ?"
              callback={confirmOrder}
              disabled={statusOrder === "delivery" ? true : false}
            />
          </TableCell>
        </TableRow>
      </TableBody>
      <TableBody>
        <TableRow>
          <TableCell colSpan={4}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Table>
                <TableBody>
                {
                  !props.orderDone.Products ? [] : props.orderDone.Products.map((product, index) => (
                  <TableRow key={index}>
                    <TableCell >{product.name}</TableCell>
                    <TableCell >{product.qtd + "x"}</TableCell>
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