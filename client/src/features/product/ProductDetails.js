import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { withStyles } from '@mui/styles';
import { useNavigate } from "react-router-dom";
import { Box, Button, IconButton, Typography, Rating } from '@mui/material';
import { addToCart } from './productListSlice';
import { Formatter } from '../../common/utils';
import FavComponent from './FavComponent';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

const Styles = theme => ({
  container: {
    display: 'flex',
    padding: '5%',
    maxWidth: 900,
    margin: '0 auto',
    justifyContent: 'space-between',
    [theme.breakpoints.down(480)]: {
      flexDirection: 'column'
    }
  },
  ratingContainer: {
    display: 'flex',
    marginBottom: 20
  },
  img: {
    width: 300,
    height: 300
  },
  price: {
    display: 'flex',
    margin: '30px 0'
  },
  back: {
    paddingLeft: '3.334%',
    marginTop: 97
  },
  imgContainer: {
    marginRight: 50
  }
})

const ProductDetails = ({ classes }) => {
  const dispatch = useDispatch(); 
  const navigate = useNavigate();
  const products = useSelector(store => store.products);
  const { images, name, prices, ratings } = products.selected;

  const handleAddToCart = () => {
    dispatch(addToCart(products.selected))
    navigate('/cart')
  }

  return (
    <>
      <Box className={classes.back} data-testid="productDetails">
        <IconButton onClick={() => navigate('/')}>
          <ArrowBackRoundedIcon />
        </IconButton>
      </Box>
      <Box className={classes.container}>
        <Box className={classes.imgContainer}>
          <FavComponent item={products.selected} />
          <img className={classes.img} src={images[0].path} alt={name} />
        </Box>
        <Box>
          <Typography variant="h3">{name}</Typography>
          <Box className={classes.price}>
            <Typography color="primary" variant="h4" sx={{ fontWeight: 600 }}>{Formatter.format(prices.regular.value / 100)}</Typography>
            <Typography sx={{ margin: '10px 0 0 10px'}} variant="caption">inkl. MwSt.zzgl. Versandkosten</Typography>
          </Box>
          <Box className={classes.ratingContainer}>
            <Rating precision={0.5} name="read-only" value={ratings?.average} readOnly />
            <Typography>{`( ${ratings?.count} )`}</Typography>
          </Box>
          <Typography sx={{ fontWeight: 600, marginBottom: '30px'}} variant="subtitle2" color="primary">3-5 Werktage</Typography>
          <Button variant="contained" onClick={handleAddToCart}>In den Warenkorb</Button>
        </Box>
      </Box>
    </>
  )
}
export default withStyles(Styles)(ProductDetails)