import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const Cards = () => {
  return (
    <Box>
     <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
    <br />
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="data:image/jpeg;base64,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"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card> 
    </Box>
  )
}

export default Cards
