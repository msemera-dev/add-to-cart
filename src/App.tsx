import './App.css';
import { Grid } from '@material-ui/core';
import HeaderNav from './components/headerNav/HeaderNav';
import Shirt from './assets/shirt.jpg';
import ItemDetails from './components/itemDetails/ItemDetails';
import SizeSelector from './components/sizeSelector/SizeSelector';
import styles from './appStyles.module.css';
import { useEffect, useState } from 'react';

function App() {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [cartItems, setCartItems] = useState<string[]>([]);
  const [itemsWithCount, setItemsWithCount] = useState<any>({
    'S': null,
    'M': null,
    'L': null
  });

  const setSizeAction = (selected: string) => {
    setSelectedSize(selected);
  }

  const addToCart = (item: string) => {
    setCartItems(cartItems.concat(item));
  }

  useEffect(() => {
    setValueAndItem();
  }, [cartItems]);

  const setValueAndItem = () => {
    let counts: any = {};
    cartItems.forEach(item => {
      counts[item] = counts[item] ? counts[item] + 1 : 1;
    })
    setItemsWithCount(counts);
  };

  return (
    <Grid container className={styles.mainGrid}>
      <HeaderNav cartItems={cartItems} itemsWithCount={itemsWithCount} />
      <Grid container className={styles.contentContainer}>
        <Grid container item xs={12} md={7} lg={7}>
          <img src={Shirt} alt='Shirt' className={styles.img} />
        </Grid>
        <Grid item xs={12} md={5} lg={5}>
          <ItemDetails />
          <SizeSelector addToCart={addToCart} setSelectedSize={setSizeAction} selectedSize={selectedSize} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
