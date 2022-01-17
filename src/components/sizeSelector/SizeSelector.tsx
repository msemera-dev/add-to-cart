import { Box, Grid } from "@material-ui/core";
import { FunctionComponent } from "react";
import SizeContainer from "./sizeContainer/SizeContainer";
import styles from './sizeSelectorStyles.module.css';

export interface ISizeSelectorProps {
  selectedSize: string;
  setSelectedSize: (value: string) => void;
  addToCart: (value: string) => void;
}

const SizeSelector: FunctionComponent<ISizeSelectorProps> = ({ selectedSize, setSelectedSize, addToCart }) => {
  return (
    <Grid className={styles.mainContainer}>
      <Box className={styles.sizeHeaderContainer}>
        <span className={styles.size}>SIZE</span>
        <span className={styles.required}>*</span>
        <span className={styles.selectedSize}>{selectedSize}</span>
      </Box>
      <Box>
        <SizeContainer boxClass={styles.unselectedContainer} content='S' onClick={setSelectedSize} />
        <SizeContainer boxClass={styles.unselectedContainer} content='M' onClick={setSelectedSize} />
        <SizeContainer boxClass={styles.unselectedContainer} content='L' onClick={setSelectedSize} />
      </Box>
      <button className={styles.addToCartCTA} onClick={() => addToCart(selectedSize)}>add to cart</button>
    </Grid>
  )
}

export default SizeSelector;