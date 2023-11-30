import React from 'react';
import { Box,Grid,Button,Typography } from '@mui/material';
const Header=(props)=>{
    return(
<Box py={7} bgcolor="secondary.main" color="white">
    <Grid container justifyContent='center'>

  
    <Grid item xs={10}>
        <Box display='flex' justifyContent='space-between'>

        
    <Typography variant='h4'>Open Job Listing</Typography>
    <Button onClick={props.popup} variant='contained' color='primary' disableElevation>Post a Job</Button>
    </Box>
    </Grid>
    </Grid>
</Box>
    )

}
export default Header;