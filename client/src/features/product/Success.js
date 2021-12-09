import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

export const Success = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ textAlign: 'center', marginTop: '50px'}}>
      <Typography sx={{ marginBottom: '20px'}} variant="h3">Danke für ihren Einkauf!!!</Typography>
      <Typography sx={{ marginBottom: '30px'}} variant="h5">Deine Bestellungen würden dich bald erreichen</Typography>
      <Button variant="contained" onClick={() => navigate('/')}>Mehr shoppen</Button>
    </Box>
  )
}

export default Success;
