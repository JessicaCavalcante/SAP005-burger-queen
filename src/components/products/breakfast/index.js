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
import ExposureZeroOutlinedIcon from "@material-ui/icons/ExposureZeroOutlined";
import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined";

const useStyles = makeStyles({
  table: {
    minWidth: 500
  }
});

export const Breakfast =  (props) => {
  const classes = useStyles();
  
  return (
    <div>
      <TableContainer component={Paper} style={{width: '100%', marginLeft: '0px', marginRight: '0px'}}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align="left" colSpan={3} style={{fontWeight: 'bolder', backgroundColor: '#8bc34a', color: '#fff', fontSize:'1rem', textAlign: 'center'}}>
                Café da manhã
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Opções</TableCell>
              <TableCell align="left">Preço</TableCell>
              <TableCell align="left">Quantidade</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{props.product}</TableCell>
              <TableCell align="left">5,00</TableCell>
              <TableCell align="left">
                <ToggleButtonGroup size="small">
                  <ToggleButton value="remove-icon" >
                    <RemoveOutlinedIcon />
                  </ToggleButton>
                  <ToggleButton value="quantity">
                    <ExposureZeroOutlinedIcon />
                  </ToggleButton>
                  <ToggleButton value="add-icon">
                    <AddOutlinedIcon />
                  </ToggleButton>
                </ToggleButtonGroup>
              </TableCell>
            </TableRow>
            
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )  
}
