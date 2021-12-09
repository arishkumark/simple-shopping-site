import React from 'react';
import { withStyles } from '@mui/styles';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Box, AppBar, Toolbar, IconButton, Badge } from '@mui/material';
import HomeIcon from './icons/HomeIcon';
import SearchComponent from './SearchComponent';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Styles = () => ({
  appBarRoot: {
    padding: '0 3.334%'
  },
  favIconRoot: {
    margin: '0 20px 0 24px'
  }
})
const CustomAppBar = ({ classes }) => {
  const navigate = useNavigate();
  const products = useSelector(store => store.products);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar classes={{ root: classes.appBarRoot }} position="static">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <IconButton disableRipple onClick={() => navigate('/')}>
              <HomeIcon />
            </IconButton>
          </Box>
          <SearchComponent />
          <IconButton onClick={() => navigate('/wishList')} sx={{ margin: '0 20px'}}>
            <Badge badgeContent={products.wishList.length} color="primary">
              <FavoriteBorderRoundedIcon />
            </Badge>
          </IconButton>
          <IconButton onClick={() => navigate('/cart')}>
          <Badge badgeContent={products.cart.length} color="primary">
            <ShoppingCartOutlinedIcon />
          </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default withStyles(Styles)(CustomAppBar);
