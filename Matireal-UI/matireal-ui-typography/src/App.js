import { Typography} from '@mui/material'
import { makeStyles } from '@mui/styles';
import React from 'react'

const useStyles = makeStyles({
  blue: {
    color: 'lightblue'
  },
  gray: {
    color: "lightgray"
  }
})

const App = () => {
  const classes = useStyles();
  return (
    <>
     <Typography variant='h1'>h1 Heading</Typography> 
     <Typography variant='h2'>h2 Heading</Typography> 
     <Typography variant='h3'>h3 Heading</Typography> 
     <Typography variant='h4'>h4 Heading</Typography> 
     <Typography variant='h5'>h5 Heading</Typography> 
     <Typography variant='h6'>h6 Heading</Typography>
     <hr />
     <Typography variant='p'>Peragraph</Typography>
     <hr />
     <Typography variant='subtitle1' className={classes.blue}>Sub Title 1</Typography> 
     <Typography variant='subtitle2' className={classes.gray}>Sub Title 2</Typography> 
     <hr />
     <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac pretium metus, in suscipit justo. Praesent facilisis viverra felis, non lobortis dui bibendum a. Nunc ex nunc, maximus eu nisl at, malesuada volutpat est. Duis venenatis nibh magna.</Typography>
     <Typography variant='body2' gutterBottom>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac pretium metus, in suscipit justo. Praesent facilisis viverra felis, non lobortis dui bibendum a. Nunc ex nunc, maximus eu nisl at, malesuada volutpat est. Duis venenatis nibh magna.</Typography>
    </>
  )
}

export default App
