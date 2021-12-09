import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProductList = createAsyncThunk('productList/fetch', async() => {
  const res = await fetch('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `{
        categories(ids: "156126", locale: de_DE) {
          name
          articleCount
          childrenCategories {
            name
            urlPath
          }
          categoryArticles(first: 50) {
            articles {
              name
              variantName,
              ratings {
                average
                count
              }
              prices {
                currency
                regular {
                  value
                }
              }
              images(
                format: WEBP
                maxWidth: 200
                maxHeight: 200
                limit: 1
              ) {
                path
              }
            }
          }
        }
      }`
    }),
  });
  return res.json();
})

const initialState = {
  list:[],
  wishList: [],
  cart: [],
  status: null,
  sortBy: 'DEFAULT',
  selected: null,
  search: []
}

const productListSlice = createSlice({
  name: 'productList',
  initialState,
  reducers: {
    sortBy: (state, action) => {
      state.sortBy = action.payload;
      let articles = state.list.categories[0].categoryArticles.articles;
      switch(action.payload) {
        case 'LOW_PRICE_FIRST':
          articles = articles.sort((a, b) => 
            a.prices.regular.value - b.prices.regular.value
          )
          break;
        case 'HIGH_PRICE_FIRST':
          articles = articles.sort((a, b) => 
            b.prices.regular.value - a.prices.regular.value
          )
          break;
        case 'BEST_RATING':
          articles = articles.sort((a, b) => 
            b.ratings.average - a.ratings.average
          )
          break;
        default:
          break;
      }
      state.list.categories[0].categoryArticles.articles = articles;
    },
    addFav: (state, action) => {
      state.wishList.push(action.payload)
    },
    removeFav: (state, action) => {
      state.wishList = state.wishList.filter((item) => item.name !== action.payload.name)
    },
    addSelected: (state, action) => {
      state.selected = action.payload
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload)
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.name !== action.payload.name)
    },
    search: (state, action) => {
      if (action.payload === '') {
        state.search = []
      } else {
        state.search = state.list.categories[0].categoryArticles.articles.filter((item) => item.name.toLowerCase().includes(action.payload.toLowerCase()))
      }
    },
    emptyCart: (state) => {
      state.cart = []
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductList.pending, (state) => {
      state.status = 'pending';
    })
    builder.addCase(fetchProductList.fulfilled, (state, action) => {
      state.status = 'success';
      state.list = action.payload?.data;
      state.sortBy = 'DEFAULT'
    })
    builder.addCase(fetchProductList.rejected, (state) => {
      state.status = 'error';
    })
  }
});

export const {
  sortBy,
  addFav,
  removeFav,
  addSelected,
  addToCart,
  removeFromCart,
  search,
  emptyCart
} = productListSlice.actions
export default productListSlice.reducer