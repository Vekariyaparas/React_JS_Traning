import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const Grids = () => {
  return (
    <Box>
      <Typography variant="h4">Grids</Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Box sx={{border: '2px solid black'}}>1</Box>
          </Grid>
          <Grid item xs={4}>
            2
          </Grid>
          <Grid item xs={4}>
            3
          </Grid>
          <Grid item xs={8}>
            4
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Grids;
