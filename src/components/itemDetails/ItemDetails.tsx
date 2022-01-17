import { Grid } from "@material-ui/core";
import { FunctionComponent } from "react";
import styles from './itemDetailsStyles.module.css';

const ItemDetails: FunctionComponent = () => {
  return (
    <Grid className={styles.mainContainer}>
      <span className={styles.itemName}>Classic Tee</span>
      <span className={styles.itemPrice}>$75.00</span>
      <span className={styles.itemDescription}>Dolor sit amet, consectetur adipiscing elit. Haec et tu ita posuisti, et verba vestra sunt. Quod autem ratione actum est, id officium apellamus dolor sit amet, consectetur adipiscing elit. Haec et tu ita posuisti, et verba vestra sunt. Quod autem ratione actum est, id officium apellamus</span>
    </Grid>
  )
}

export default ItemDetails;