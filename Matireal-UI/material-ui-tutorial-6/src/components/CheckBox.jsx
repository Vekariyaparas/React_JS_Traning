import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Typography,
} from "@mui/material";
import React from "react";

const CheckBox = () => {
  return (
    <>
      <Box>
        <Typography variant="h4">CheckBox</Typography>
        <Checkbox {...FormLabel} defaultChecked />
        <Checkbox {...FormLabel} />
        <Checkbox {...FormLabel} disabled />
        <Checkbox {...FormLabel} disabled checked />
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Label"
          />
          <FormControlLabel required control={<Checkbox color="secondary" />} label="Required" />
          <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
        </FormGroup>
      </Box>
    </>
  );
};

export default CheckBox;
