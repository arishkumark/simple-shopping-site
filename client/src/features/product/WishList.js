import React from 'react'
import { withStyles } from '@mui/styles';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Typography } from '@mui/material';
import { Formatter } from '../../common/utils';
import { addToCart, removeFav } from './productListSlice';


const Styles = theme => ({
  empty: {
    maxWidth: 700,
    margin: '100px auto',
    textAlign: 'center'
  },
  container: {
    maxWidth: 700,
    margin: '100px auto',
    [theme.breakpoints.down(480)]: {
      padding: '0 3%'
    }
  },
  imgContainer: {
    marginRight: '5%',
    width: '30%',
    [theme.breakpoints.down(480)]: {
      textAlign: 'center',
      width: 'auto'
    }
  },
  itemWrapper: {
    display: 'flex',
    [theme.breakpoints.down(480)]: {
      flexDirection: 'column'
    }
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '25px 0'
  },
  nameContainer: {
    width: '65%',
    borderBottom: '1px solid #d9d9d9',
    marginBottom: 20,
    [theme.breakpoints.down(480)]: {
      width: 'auto'
    }
  }
})

const WishList = ({ classes }) => {
  const dispatch = useDispatch(); 
  const navigate = useNavigate();
  const products = useSelector(store => store.products);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item))
    dispatch(removeFav(item))
    navigate('/cart')
  }

  const handleRemove = (item) => {
    dispatch(removeFav(item))
  }

  return (
    <>
    {products.wishList.length === 0 && <Box className={classes.empty}>
      <Typography sx={{ marginBottom: '20px' }} variant="h6">Hier ist richtig viel Platz für deine Wohnideen.</Typography>
      <Typography sx={{ marginBottom: '50px' }}>Lass dich inspirieren und fülle deinen Wunschzettel mit tollen Produkten.</Typography>
      <Button variant="contained" onClick={() => navigate('/')}>Jetzt im Shop stöbern</Button>
    </Box>}
    {products.wishList.length > 0 && <Box className={classes.container}>
    <Typography sx={{ borderBottom: '1px solid #d9d9d9', paddingBottom: '15px', marginBottom: '30px'}} variant="h4">Mein Wunschzettel</Typography>
      <Box className={classes.wrapper}>
        {
          products.wishList.map((item) => (
            <Box className={classes.itemWrapper}>
              <Box className={classes.imgContainer}>
                <img src={item.images[0].path} alt={item.name} />
              </Box>
              <Box className={classes.nameContainer}>
                <Typography>{item.name}</Typography>
                <Box className={classes.details}>
                  <Typography>3-5 Wochen</Typography>
                  <Typography sx={{ fontWeight: 600 }}>{Formatter.format(item.prices.regular.value / 100)}</Typography>
                  <Button variant="contained" onClick={() => handleAddToCart(item)}>In den Warenkorb</Button>
                </Box>
                <Button onClick={() => handleRemove(item)} variant="text" sx={{ color: '#565d60'}}>Löschen</Button>
              </Box>
            </Box>
          ))
        }
      </Box>
    </Box>}
    </>
  )
}

export default withStyles(Styles)(WishList)
