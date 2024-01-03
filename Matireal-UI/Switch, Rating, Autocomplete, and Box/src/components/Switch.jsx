import { Box, FormControlLabel, Typography, Switch } from "@mui/material";
import React, { useState } from "react";

const Switchs = () => {
  const [checked, setChecked] = useState(false);
  console.log({ checked });
  const handleChange = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <Box>
      <Typography variant="h4">Switch Button</Typography>
      <FormControlLabel
        label="Dark Mode"
        control={
          <Switch
            checked={checked}
            onChange={handleChange}
            size="small"
            color="success"
          />
        }
      />
    </Box>
  );
};

export default Switchs;
