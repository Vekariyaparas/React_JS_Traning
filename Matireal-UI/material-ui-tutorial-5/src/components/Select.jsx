import { Box, MenuItem, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Select = () => {
  const [Country, setCountry] = useState([]);
  console.log(Country)
  const handleChange = (e) => {
    const value = e.target.value
    setCountry(typeof value === 'string' ? value.split(',') : value);
  };
  return (
    <Stack>
      <Typography variant="h4">Select</Typography>
    <Box width='200px'>
      <TextField
        label="Select Country"
        select
        value={Country}
        onChange={handleChange}
        fullWidth
        SelectProps={{
          multiple: true
        }}
        size="small"
        color="secondary"
        helperText="Please select your country"
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
    </Stack>
  );
};

export default Select;
