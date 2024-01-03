import { Box, Rating, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

const Ratings = () => {
  const [value, setValue] = useState(2);
  return (
    <Box>
      <Typography>Rating Button</Typography>
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simplle"
        value={value}
        onChange={(e, nawValue) => {
          setValue(nawValue);
        }}
      />
      <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={value} readOnly />
      <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value} disabled />
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} />
      <Stack spacing={1}>
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        <Rating
          name="half-rating-read"
          defaultValue={2.5}
          precision={0.5}
          readOnly
        />
      </Stack>
      <Stack spacing={1}>
        <Rating name="size-small" defaultValue={2} size="small" />
        <Rating name="size-medium" defaultValue={2} />
        <Rating name="size-large" defaultValue={2} size="large" />
      </Stack>
    </Box>
  );
};

export default Ratings;
