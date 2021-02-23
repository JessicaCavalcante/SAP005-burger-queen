import React from "react";
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
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  table: {
    minWidth: 500
  }
});

export const OrderResume =  (props) => {
  const classes = useStyles();
  
  return (
    <div>
      <TableContainer component={Paper} style={{width: '100%', marginLeft: '0px', marginRight: '0px'}}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align="left" colSpan={4} style={{fontWeight: 'bolder', backgroundColor: '#8bc34a', color: '#fff', fontSize:'1rem', textAlign: 'center'}}>
                Pedidos
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell align="left">Café Americano</TableCell>
              <TableCell align="left">5,00</TableCell>
              <TableCell align="left">
                <IconButton>
                  <DeleteIcon/>
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} align="right">
                <Button variant="contained">Cancelar</Button>
              </TableCell>
              <TableCell colSpan={2} align="left">
                <Button variant="contained" color="primary">Preparar</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )  
}
