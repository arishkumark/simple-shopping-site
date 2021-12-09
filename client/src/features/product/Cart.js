import React from 'react'
import { withStyles } from '@mui/styles';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Typography, IconButton } from '@mui/material';
import { Formatter } from '../../common/utils';
import { addFav, removeFromCart, emptyCart } from './productListSlice';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';


const Styles = theme => ({
  empty: {
    maxWidth: 700,
    margin: '100px auto',
    textAlign: 'center'
  },
  container: {
    maxWidth: 1100,
    margin: '100px auto',
    display: 'flex',
    justifyContent: 'space-between',
    padding: 20,
    [theme.breakpoints.down(480)]: {
      flexDirection: 'column',
    }
  },
  imgContainer: {
    marginRight: '5%',
    width: '30%',
    [theme.breakpoints.down(480)]: {
      width: 'auto',
      marginRight: '1%'
    }
  },
  itemWrapper: {
    display: 'flex',
    border: '1px solid #d9d9d9',
    maxWidth: 700,
    marginBottom: 20,
    paddingTop: 20
  },
  details: {
    display: 'flex',
    margin: '25px 0'
  },
  nameContainer: {
    width: '65%',
    marginLeft: 30,
    [theme.breakpoints.down(480)]: {
      marginLeft: 0
    }
  },
  first: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 0'
  },
  second: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: 30,
    borderBottom: '1px solid #d9d9d9'
  },
  final: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 0'
  },
  img: {
    [theme.breakpoints.down(480)]: {
      maxWidth: 165
    }
  },
  placeWrapper: {
    marginLeft: 20,
    [theme.breakpoints.down(480)]: {
      marginLeft: 0
    }
  }
})

const Cart = ({ classes }) => {
  const dispatch = useDispatch(); 
  const navigate = useNavigate();
  const products = useSelector(store => store.products);

  const handleAddToFav = (item) => {
    dispatch(addFav(item))
    dispatch(removeFromCart(item))
  }

  const handleRemove = (item) => {
    dispatch(removeFromCart(item))
  }

  const getTotal = () => {
    let total = 0;
    products.cart.forEach((item) => {
      total += item.prices.regular.value
    })
    return Formatter.format(total / 100)
  }

  const handleSuccess = () => {
    dispatch(emptyCart())
    navigate('/success')
  }

  return (
    <>
    {products.cart.length === 0 && <Box className={classes.empty}>
      <Typography sx={{ marginBottom: '20px' }} variant="h6">Dein Warenkorb ist leer</Typography>
      <Typography sx={{ marginBottom: '50px' }}>Lass dich von unserer großen Auswahl inspirieren und fülle ihn mit deinen neuen Wohnlieblingen oder melde dich in deinem Kundenkonto an, um deine ggf. bereits hinzugefügten Produkte zu sehen.</Typography>
      <Button variant="contained" onClick={() => navigate('/')}>Weiter einkaufen</Button>
    </Box>}
    {products.cart.length > 0 && <Box className={classes.container}>
      <Box className={classes.wrapper}>
      <Typography sx={{ marginBottom: '30px'}} variant="h4">Dein Warenkorb</Typography>
        {
          products.cart.map((item) => (
            <Box className={classes.itemWrapper}>
              <Box className={classes.imgContainer}>
                <img className={classes.img} src={item.images[0].path} alt={item.name} />
              </Box>
              <Box className={classes.nameContainer}>
                <Typography>{item.name}</Typography>
                <Box className={classes.details}>
                  <Typography>3-5 Wochen</Typography>
                  <Typography sx={{ fontWeight: 600, marginLeft: '20px' }}>{Formatter.format(item.prices.regular.value / 100)}</Typography>
                </Box>
                <Button onClick={() => handleRemove(item)} variant="text" sx={{ color: '#565d60'}}>Löschen</Button>
              </Box>
              <Box className={classes.btns}>
                <IconButton onClick={() => handleRemove(item)}>
                  <CloseOutlinedIcon />
                </IconButton>
                <IconButton onClick={() => handleAddToFav(item)}>
                  <FavoriteBorderRoundedIcon />
                </IconButton>
              </Box>
            </Box>
          ))
        }
      </Box>
      <Box className={classes.placeWrapper}>
        <Typography sx={{ paddingBottom: '30px', borderBottom: '1px solid #d9d9d9'}} variant="h4">Deine Bestellübersicht</Typography>
        <Box className={classes.first}>
          <Typography>Zwischensumme</Typography>
          <Typography>{getTotal()}</Typography>
        </Box>
        <Box className={classes.second}>
          <Typography color="secondary">Verpackung & Versand</Typography>
          <Typography color="secondary">kostenlos</Typography>
        </Box>
        <Box className={classes.final}>
          <Typography sx={{ fontWeight: 600}}>Gesamtsumme</Typography>
          <Typography sx={{ fontWeight: 600}}>{getTotal()}</Typography>
        </Box>
        <Button fullWidth onClick={handleSuccess} variant="contained">Zur Kasse gehen</Button>
      </Box>
    </Box>}
    </>
  )
}

export default withStyles(Styles)(Cart)
