import React from 'react';
import { withStyles } from '@mui/styles';
import { Box, Typography, MenuList, MenuItem } from '@mui/material';

const Styles = theme => ({
  container: {
    minWidth: 200,
    marginRight: '100px',
    [theme.breakpoints.down(770)]: {
      marginRight: '20px',
      maxWidth: 100
    }
  }
})

export const ChildrenCategories = ({ classes, data }) => {
  return (
    <Box className={classes.container}>
      <MenuList>
      {
        data.map((item, index) => (
          <MenuItem key={`item${index}`}>
            <Typography>{item.name}</Typography>
          </MenuItem>
        ))
      }
      </MenuList>
    </Box>
  )
}

export default withStyles(Styles)(ChildrenCategories)
