import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";


const NoRoute = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ margin: '100px auto', textAlign: 'center', padding: '20px'}}>
      <Typography sx={{ marginBottom: '50px'}} variant="h5">Verzeihung! Wir konnten die Seite nicht finden</Typography>
      <Button variant="contained" onClick={() => navigate('/')}>Entdecken Sie die Produkte</Button>
    </Box>
  )
}

export default (NoRoute)

