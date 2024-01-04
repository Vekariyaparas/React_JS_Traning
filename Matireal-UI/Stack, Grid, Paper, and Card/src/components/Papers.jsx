import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

const Papers = () => {
  return (
    <Box>
      <Typography variant='h4'>Paper</Typography>
     <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper elevation={0} />
      <Paper />
      <Paper elevation={1} />
      <Paper elevation={2} />
      <Paper elevation={3} />
    </Box>
    </Box>
  )
}

export default Papers
