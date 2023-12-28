import { ButtonGroup, Stack, Typography, Button } from "@mui/material";
import React from "react";

const Button_Group = () => {
  return (
    <Stack direction={"column"} spacing={2}>
      <Typography variant="h4">Buttons Groups</Typography>
      <Stack spacing={2} direction={"row"}>
        <ButtonGroup variant="contained">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <ButtonGroup variant="text">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <ButtonGroup variant="outlined">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack spacing={2} direction={"row"}>
      <ButtonGroup variant="contained" orientation="vertical" color="secondary">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <ButtonGroup variant="text" orientation="vertical" size="small">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <ButtonGroup variant="outlined" orientation="vertical" color="warning">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
};

export default Button_Group;
