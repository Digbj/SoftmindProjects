import React from "react";
import {Box,Button,Grid, Typography} from '@mui/material';
import {differenceInHours} from 'date-fns'
import theme from "../theme/theme";
const JobCard=(props)=>{
  
    const style={
        border:'1px solid #e8e8e8',
        cursor:'pointer',
        transition:"0.3s",
        '&:hover':{
            boxShadow:'0px 5px 25px rgba(0,0,0,0.1)',
            borderLeft:'6px solid #4D64E4'
        },
        "company":{
            fontSize:'13.5px',
            backgroundColor:theme.palette.primary.main,
            padding:theme.spacing(0.75),
            borderRadius:'5px',
            display:'inline-block',
            fontweight:600
        },
        "skill":{
            margin:theme.spacing(0.5),
            padding:theme.spacing(0.75),
            fontSize:'14.5px',
            borderRadius:'5px',
            transition:'3s',
            cursor:'pointer',
            fontWeight:600,
            backgroundColor:theme.palette.secondary.main,
            color:'#fff',
        },
    }

    return(
        <Box p={2} sx={style}>
            <Grid container alignItems='center'>
                <Grid item xs>
                    <Typography variant="subtitle1">{props.title}</Typography>
                    <Typography sx={style.company} variant="subtitle2">{props.companyName}</Typography>

                </Grid>
                <Grid item container xs>
                    {props?.skills.map(skill=><Grid key={skill} sx={style.skill} item>{skill}</Grid>)}
                </Grid>
                <Grid item container direction='column' alignItems='flex-end' xs>
                    <Grid item>
                    <Typography variant="caption">{differenceInHours(Date.now(),props.postedOn)} hr ago | {props.type} | {props.location}</Typography>
                    </Grid>
                    <Grid item><Box mt={2}><Button variant='outlined'>Check</Button></Box></Grid>
                    
                </Grid>
            </Grid>
        </Box>
    )
}
export default JobCard;