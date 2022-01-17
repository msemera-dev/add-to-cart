import { Box, Grid, Popover } from "@material-ui/core";
import { FunctionComponent, useState } from "react";
import CartItem from "./cartItems/CartItems";
import styles from './headerNavStyles.module.css';

interface IHeaderNavProps {
  cartItems: string[];
  itemsWithCount: any;
}

const HeaderNav: FunctionComponent<IHeaderNavProps> = ({ cartItems, itemsWithCount }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Grid container className={styles.mainContainer}>
      <Box className={styles.navContainer}>
        <span aria-describedby={id} className={styles.navCart} onClick={handleClick}>
          My Cart {cartItems.length !== 0 && <span>( {cartItems.length} )</span>}
        </span>
        <Popover
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={handleClose}
          anchorEl={anchorEl}
        >
          {cartItems.length !== 0 ?
            Object.keys(itemsWithCount).map((key: string) => (
              itemsWithCount[key] !== null && <CartItem item={key} length={itemsWithCount[key]} />
            ))
            : (
              <span className={styles.noItemsYet}>There is no item selected yet. </span>
            )
          }
        </Popover>
      </Box>
    </Grid>
  )
}

export default HeaderNav;