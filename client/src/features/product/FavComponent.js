import React, { useState } from 'react'
import { Box, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles } from '@mui/styles';
import { addFav, removeFav } from './productListSlice';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';


const Styles = () => ({
  favIcon: {
    textAlign: 'right'
  }
})

const FavComponent = ({ classes, item }) => {
  const dispatch = useDispatch(); 
  const products = useSelector(store => store.products);
  const isFav = Boolean(products.wishList.find((product) => product.name === item.name))

  const[fav, setFav] = useState(isFav)

  const handleFavChange = (e) => {
    e.stopPropagation();
    setFav(!fav)
    if(fav) {
      dispatch(removeFav(item))
    } else {
      dispatch(addFav(item))
    }
  }

  return (
    <Box className={classes.favIcon}>
      <IconButton onClick={(e) => handleFavChange(e)}>
        {
          fav ? <FavoriteRoundedIcon color="primary"/> : <FavoriteBorderRoundedIcon />
        }
      </IconButton>
    </Box>
  )
}

export default withStyles(Styles)(FavComponent);
