import { Box, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const DisplayName = () => {
    // let username="flash"
    const [username, setUsername]= useState("flash");
  return (
    <Box>
     <Typography variant='h3'> Display name</Typography>
     <Typography variant='h6'>{username}</Typography>
     <TextField  label="Name" required onChange={(event)=>{
 setUsername(event.target.value);

     }}
     />
    </Box>
  )
}

export default DisplayName
