import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withStyles } from '@mui/styles';
import { useNavigate } from "react-router-dom";
import { Box, CircularProgress, useMediaQuery, Typography, Grid, Rating,
  FormControl, Select, MenuItem } from '@mui/material';
import { fetchProductList, sortBy, addSelected } from './productListSlice';
import ChildrenCategories from './ChildrenCategories';
import { Formatter } from '../../common/utils';
import FavComponent from './FavComponent';
import ErrorCard from '../../common/ErrorCard';

const Styles = () => ({
  progressWrapper: {
    margin: '100px auto',
    textAlign: 'center'
  },
  productContainer: {
    display: 'flex',
    padding: '3%'
  },
  ratingContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  wrapper: {
    marginTop: 100
  },
  sortingContainer: {
    paddingRight: '3%',
    textAlign: 'right',
    display: 'flex',
    justifyContent: 'end'
  }
})

export const ProductList = ({ classes }) => {
  const dispatch = useDispatch(); 
  const navigate = useNavigate();
  const products = useSelector(store => store.products);
  const isMobile = useMediaQuery('(max-width:480px)');

  useEffect(() => {
    dispatch(fetchProductList())
  }, [dispatch])

  const handleSortChange = (e) => {
    if(e.target.value === 'DEFAULT') {
      dispatch(fetchProductList())
    } else {
      dispatch(sortBy(e.target.value))
    }
  }

  const handleProductSelect = (item) => {
    dispatch(addSelected(item))
    navigate('/productDetails')
  }

  if (products.status === 'pending') {
    return (<Box className={classes.progressWrapper}>
      <CircularProgress />
    </Box>)
  }

  if (products.status === 'error') {
    return <ErrorCard />
  }

  return (
    <>
      {products.status === 'success' &&
      <Box className={classes.wrapper} data-testid="productWrapper">
        <Box className={classes.sortingContainer}>
          <Typography sx={{ margin: '15px 5px 0 0' }}>Sortieren:</Typography>
          <FormControl>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={products.sortBy}
              onChange={handleSortChange}
              sx={{ minWidth: '227px', textAlign: 'center'}}
            >
              <MenuItem value="DEFAULT">Standard</MenuItem>
              <MenuItem value="LOW_PRICE_FIRST">Preis niedrig bis hoch</MenuItem>
              <MenuItem value="HIGH_PRICE_FIRST">Preis - hoch nach niedrig</MenuItem>
              <MenuItem value="BEST_RATING">Beste Bewertung</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box className={classes.productContainer}>
          {!isMobile && <ChildrenCategories data={products.list.categories[0].childrenCategories || []} />}
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ textAlign: 'center'}}>
          {
            ((products.search.length > 0 && products.search) || (products.list && products.list.categories[0].categoryArticles.articles)).map((item, index) => (
              <Grid onClick={() => handleProductSelect(item)} sx={{ cursor: 'pointer'}} item xs={4} sm={4} md={4} key={`item${index}`}>
                  <FavComponent item={item} />
                  <img src={item.images[0].path} alt={item.name} />
                  <Typography>{item.name}</Typography>
                  <Typography sx={{ fontWeight: 600 }}>{Formatter.format(item.prices.regular.value / 100)}</Typography>
                  <Box className={classes.ratingContainer}>
                    <Rating precision={0.5} name="read-only" value={item.ratings?.average} readOnly />
                    <Typography>{`( ${item.ratings?.count} )`}</Typography>
                  </Box>
              </Grid>
            ))
          }
          </Grid>
        </Box>
      </Box>}
    </>
  )
}

export default withStyles(Styles)(ProductList)
