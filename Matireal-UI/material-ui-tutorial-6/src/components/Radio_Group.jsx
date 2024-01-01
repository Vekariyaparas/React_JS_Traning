import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import React from "react";

const Radio_Group = () => {
  return (
    <>
      <Typography variant="h4">Radio Buttons</Typography>
      <Box>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="male"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel
              value="male"
              control={
                <Radio
                  sx={{
                    color: pink[800],
                    "&.Mui-checked": {
                      color: pink[600],
                    },
                  }}
                />
              }
              label="Male"
            />
            <FormControlLabel
              value="other"
              control={<Radio color="success" />}
              label="Other"
            />
            <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="other"
            />
          </RadioGroup>
        </FormControl>
      </Box>
    </>
  );
};

export default Radio_Group;
