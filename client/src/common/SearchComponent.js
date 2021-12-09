import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';
import { useDispatch } from 'react-redux';
import { search , fetchProductList} from '../features/product/productListSlice';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    border: '1px solid #d9d9d9',
    borderRadius: 4,
    color: '#000',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


const SearchComponent = () => {
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    if (e.target.value.trim() === '') {
      dispatch(fetchProductList())
      dispatch(search(''))
    } else {
      dispatch(search(e.target.value))
    }
  }
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon color="primary"/>
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Suchen"
        inputProps={{ 'aria-label': 'search' }}
        onChange={(e) => handleSearch(e)}
      />
    </Search>
  )
}

export default SearchComponent;
