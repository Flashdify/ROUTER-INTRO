import { Button,Box,Typography } from '@mui/material'
import React, { useState } from 'react'
// ? useState => hooks => react function
// ? use state is used to make react know which one to target...here react is targeting count so value of count changes
const Counter = () => {

const [count, setCount]= useState(1);
console.log(count)
  return (
    <Box > 
        <Typography variant='h3'>AGE</Typography>
        <Typography variant='h4'>{count}</Typography>
        <Button variant="contained" color="success" onClick={()=>{
            let newCount=count+1;
            setCount(newCount);
        }}>Increase</Button>

      
        <Button variant="contained" color="error" onClick={()=>{
            let newCount=count-1;
            setCount(newCount);
        }}>Decrease</Button>
    </Box>
     
   
  )
}

export default Counter
