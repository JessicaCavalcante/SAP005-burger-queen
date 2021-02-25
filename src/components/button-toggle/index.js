import React, {useState} from 'react';
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined";

export const ToggleButtonCustom = (props) => {

  const [qtdProduct, setQtdProduct] = useState(0);
 
  const setQuote = (productId, increment) => {
   let qtd = qtdProduct + increment;
   if (qtd < 0) {
     qtd = 0;
   }
    setQtdProduct(qtd);
    props.addProductToQuote({'product': {'id': productId, 'qtd': qtd}});
 }

  return (
    <ToggleButtonGroup>
      <ToggleButton value={"remove-icon"} onClick={() => setQuote(props.productId, - 1)}>
        <RemoveOutlinedIcon />
      </ToggleButton>
      <ToggleButton value={"quantity"} disabled style={{fontSize: '1rem', color: 'black'}}>
        {qtdProduct}
      </ToggleButton>
      <ToggleButton value={"add-icon"} onClick={() => setQuote(props.productId, + 1)}>
        <AddOutlinedIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
