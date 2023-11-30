import React from "react";
import {Box,Button,Select,MenuItem} from '@mui/material';
const Search=()=>{

const style={
    backgroundColor:'#fff',
    display:'flex',
    boxShadow:'0px 1px 5px rgba(0,0,0,0.1)',
    borderRadius:'5px',
    '&>*':{
        flex:1,
        height:"40px",
        margin:"8px"
    }
}

    return(
        <Box p={2} mt={-5} mb={2} sx={style}>
            <Select variant="filled" disableUnderline defaultValue='Full Time'>
                    <MenuItem value='Full Time'>Full Time</MenuItem>
                    <MenuItem value='Part Time'>Part Time</MenuItem>
                    <MenuItem value='Contract'>Contract</MenuItem>
            </Select>
            <Select variant="filled" disableUnderline defaultValue='Remote'>
                    <MenuItem value='Remote'>Remote</MenuItem>
                    <MenuItem value='In Office'>In Office</MenuItem>
                    <MenuItem value='Hybrid'>Hybrid</MenuItem>
            </Select>
            <Button variant='contained' color='primary' disableElevation>Search</Button>
        </Box>
    )
}
export default Search;