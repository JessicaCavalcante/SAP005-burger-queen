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

export const Breakfast =  () => {
  const classes = useStyles();
  
  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align="left" colSpan={3}>
                Café de manhã
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
              <TableCell>Café americano</TableCell>
              <TableCell align="left">5,00</TableCell>
              <TableCell align="left">
                <ToggleButtonGroup size="small">
                  <ToggleButton value="add-icon">
                    <AddOutlinedIcon />
                  </ToggleButton>
                  <ToggleButton value="quantity">
                    <ExposureZeroOutlinedIcon />
                  </ToggleButton>
                  <ToggleButton value="remove-icon" >
                    <RemoveOutlinedIcon />
                  </ToggleButton>
                </ToggleButtonGroup>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Café com leite</TableCell>
              <TableCell align="left">7,00</TableCell>
              <TableCell align="left">
                <ToggleButtonGroup>
                  <ToggleButton value="add-icon">
                    <AddOutlinedIcon />
                  </ToggleButton>
                  <ToggleButton value="quantity">
                    <ExposureZeroOutlinedIcon />
                  </ToggleButton>
                  <ToggleButton value="remov-icon">
                    <RemoveOutlinedIcon />
                  </ToggleButton>
                </ToggleButtonGroup>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Misto Quente</TableCell>
              <TableCell align="left">10,00</TableCell>
              <TableCell align="left">
                <ToggleButtonGroup>
                  <ToggleButton value="add-icon">
                    <AddOutlinedIcon />
                  </ToggleButton>
                  <ToggleButton value="quantity">
                    <ExposureZeroOutlinedIcon />
                  </ToggleButton>
                  <ToggleButton value="remove-icon">
                    <RemoveOutlinedIcon />
                  </ToggleButton>
                </ToggleButtonGroup>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Suco de fruta natural</TableCell>
              <TableCell align="left">1,00</TableCell>
              <TableCell align="left">
                <ToggleButtonGroup>
                  <ToggleButton value="add-icon">
                    <AddOutlinedIcon />
                  </ToggleButton>
                  <ToggleButton value="quantity">
                    <ExposureZeroOutlinedIcon />
                  </ToggleButton>
                  <ToggleButton value="remove-icon">
                    <RemoveOutlinedIcon />
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
