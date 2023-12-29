import { Stack, TextField, Typography, InputAdornment } from "@mui/material";
import React, { useState } from "react";

const TextFild = () => {
  const [value, setValue] = useState([]);
  return (
    <Stack spacing={4}>
      <Typography variant="h4">Text Fild</Typography>
      <Stack spacing={2} direction={"row"}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <TextField
          label="Small secondary"
          variant="outlined"
          color="secondary"
          size="small"
          InputProps={{ readOnly: true }}
          helperText="Read only"
        />
        <TextField
          label="Small info"
          variant="outlined"
          color="info"
          size="small"
          disabled
        />
        <TextField
          label="Small error"
          variant="outlined"
          color="error"
          size="small"
          required
        />
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <TextField
          label="User name"
          variant="outlined"
          color="info"
          size="small"
          error
        />
        <TextField
          label="Password"
          variant="outlined"
          color="secondary"
          size="small"
          type="password"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={
            !value ? "Required" : "Do not share your password with anyone"
          }
        />
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default TextFild;
