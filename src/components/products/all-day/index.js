import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
//import ExposureZeroOutlinedIcon from "@material-ui/icons/ExposureZeroOutlined";
import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined";
//import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
//import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
//import IconButton from "@material-ui/core/IconButton";
//import Collapse from "@material-ui/core/Collapse";
//import Radio from "@material-ui/core/Radio";
//import RadioGroup from "@material-ui/core/RadioGroup";
//import FormControlLabel from "@material-ui/core/FormControlLabel";
//import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles({
  table: {
    minWidth: 500
  }
});

export const AllDay = (props) => {

  const classes = useStyles();

  return (
    <TableContainer component={Paper} style={{width: '97%', marginLeft: '0.5rem', marginRight: '0.5rem'}}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="left" colSpan={3} style={{fontWeight: 'bolder', backgroundColor: '#8bc34a', color: '#fff', fontSize:'1rem', textAlign: 'center'}}>
              Durante o dia
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left" colSpan={3} style={{fontWeight: 'bolder', backgroundColor: '#8bc34a', color: '#fff', fontSize:'1rem', textAlign: 'center'}}>
              Hamburgueres
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Opções</TableCell>
            <TableCell align="left">Preço</TableCell>
            <TableCell align="left">
              Quantidade
            </TableCell>
          </TableRow>
        </TableHead>
        {
          props.products['hamburguer'].map((product, index) => (
            <TableBody key={index}>
              <TableRow>
                <TableCell>{product.complement ? product.name + " " +product.flavor + " adicional " + product.complement : product.name + " " + product.flavor}</TableCell>
                <TableCell align="left">{product.price}</TableCell>
                <TableCell align="left">
                  <ToggleButtonGroup size="small">
                    <ToggleButton value="remove-icon">
                      <RemoveOutlinedIcon />
                    </ToggleButton>
                    <ToggleButton value="quantity" style={{fontSize: '1rem'}}>
                      0
                    </ToggleButton>
                    <ToggleButton value="add-icon">
                      <AddOutlinedIcon />
                    </ToggleButton>
                  </ToggleButtonGroup>
                </TableCell>
              </TableRow>

            </TableBody>
          ))
        }

        <TableHead>
          <TableRow>
            <TableCell align="left" colSpan={5} style={{fontWeight: 'bolder', backgroundColor: '#8bc34a', color: '#fff', fontSize:'1rem', textAlign: 'center'}}>
              Acompanhamentos
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Opções</TableCell>
            <TableCell align="left">Preço</TableCell>
            <TableCell align="left">Quantidade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
          props.products['side'].map((product, index) => (
            <TableRow key={index}>
              <TableCell>{product.name}</TableCell>
              <TableCell align="left">{product.price}</TableCell>
              <TableCell align="left">
                <ToggleButtonGroup size="small">
                  <ToggleButton value="remove-icon">
                    <RemoveOutlinedIcon />
                  </ToggleButton>
                  <ToggleButton value="quantity" style={{fontSize: '1rem'}}>
                    0
                  </ToggleButton>
                  <ToggleButton value="add-icon">
                    <AddOutlinedIcon />
                  </ToggleButton>
                </ToggleButtonGroup>
              </TableCell>
            </TableRow>
          ))
        }
        </TableBody>

        <TableHead>
          <TableRow>
            <TableCell align="left" colSpan={5} style={{fontWeight: 'bolder', backgroundColor: '#8bc34a', color: '#fff', fontSize:'1rem', textAlign: 'center'}}>
              Bebidas
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Opções</TableCell>
            <TableCell align="left">Preço</TableCell>
            <TableCell align="left">Quantidade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
          props.products['drinks'].map((product, index) => (
            <TableRow key={index}>
              <TableCell>{product.name}</TableCell>
              <TableCell align="left">{product.price}</TableCell>
              <TableCell align="left">
                <ToggleButtonGroup size="small">
                  <ToggleButton value="remove-icon">
                    <RemoveOutlinedIcon />
                  </ToggleButton>
                  <ToggleButton value="quantity" style={{fontSize: '1rem'}}>
                    0
                  </ToggleButton>
                  <ToggleButton value="add-icon">
                    <AddOutlinedIcon />
                  </ToggleButton>
                </ToggleButtonGroup>
              </TableCell>
            </TableRow>
            ))
          } 
        </TableBody>
      </Table>
    </TableContainer>
  );
}