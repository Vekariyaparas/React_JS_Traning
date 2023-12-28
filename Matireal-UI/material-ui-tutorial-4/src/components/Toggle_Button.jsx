import { Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import React from 'react'

const Toggle_Button = () => {
  return (
    <Stack spacing={2} direction={'column'}>
      <Typography variant='h4'>Toggle Buttons</Typography>
      <Stack spacing={2} direction={'row'}>
        <ToggleButtonGroup aria-label='text formatting'>
            <ToggleButton value='bold' aria-label='bold'><FormatBoldIcon /></ToggleButton>
            <ToggleButton value='italic' aria-label='italic'><FormatItalicIcon /></ToggleButton>
            <ToggleButton value='underline' aria-label='underline'><FormatUnderlinedIcon /></ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  )
}

export default Toggle_Button
