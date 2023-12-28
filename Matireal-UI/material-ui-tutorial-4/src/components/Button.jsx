import React from "react";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const Buttons = () => {
  return (
    <Stack spacing={4} direction={"column"}>
      <Typography variant="h4">All Buttons</Typography>
      <Stack spacing={2} direction={"row"}>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="contained" disableElevation>
          DisableElevation
        </Button>
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <Button>Primart</Button>
        <Button disabled>Disabled</Button>
        <Button href="#link">Link</Button>
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>
      <Stack spacing={2} direction={"row"} display={"block"}>
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <Button variant="contained" startIcon={<SendIcon />}>
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
        <IconButton
          aria-label="Send"
          color="success"
          size="small"
          onClick={() => alert("Clicked")}
        >
          <SendIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Buttons;
