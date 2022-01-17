import { Grid } from "@material-ui/core";
import { FunctionComponent } from "react";
import styles from './cartItemsStyles.module.css';
import Shirt from '../../../assets/shirt.jpg';

interface ICartItemProps {
  item: string;
  length: number;
}

const CartItem: FunctionComponent<ICartItemProps> = ({ length, item }) => {
  return (
    <Grid container className={styles.itemContainer}>
      <Grid item xs={2}>
        <img src={Shirt} alt='Shirt' className={styles.img} />
      </Grid>
      <Grid item xs={10} className={styles.itemDetails}>
        <span>Classic Tee</span>
        <span>{length} x <b>$75.00</b></span>
        <span>Size: {item}</span>
      </Grid>
    </Grid>
  )
}

export default CartItem;