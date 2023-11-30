import React from "react";
import theme from "../theme/theme";
import {Close} from '@mui/icons-material'
import { useState } from "react";
import {Box,Grid,Select,MenuItem,Dialog,DialogTitle,DialogContent,DialogActions,Button, FilledInput, Typography,IconButton, CircularProgress } from "@mui/material"
const preState={
       
    title: "",
    type: "Full Time",
    location: "Remote",
    companyName: "",
    companyUrl: "",
    skills: [],
    link: "",  
    description:''
}

const PostJob=({props,popup,close})=>{
    const [loading,setLoading]=useState(false)
    
    const skill=['Javascript','React.Js','Node.Js','HTML','CSS','Redux','Express', 'MongoDB'];
    const [jobDetails,setJobDetails]=useState(preState)
//   const [on,setOn]=useState(flase)
    const style2={
       
            margin:theme.spacing(0.5),
            padding:theme.spacing(0.75),
            fontSize:'14.5px',
            borderRadius:'5px',
            transition:'3s',
            cursor:'pointer',
            fontWeight:600,
            border:`1px solid ${theme.palette.secondary.main}`,
            color:theme.palette.secondary.main,
    
        '&:hover':{
            backgroundColor:theme.palette.secondary.main,
            color:'#fff'
        },
        included:{
            backgroundColor:theme.palette.secondary.main,
            color:'#fff'
        }
    }

    const handleChange=(e)=>{
        setJobDetails(oldState=>({...oldState,[e.target.name]:e.target.value}))
    }
    // console.log(jobDetails)

    const addRemoveSkills=(skill)=>{
        jobDetails.skills.includes(skill)
        ? setJobDetails((oldState)=>({...oldState,skills:oldState.skills.filter((s)=>s!==skill)}))
        : setJobDetails((oldState)=>({...oldState,skills:oldState.skills.concat(skill)}))
        console.log(jobDetails)
    }
    
    const handleSubmit=async()=>{
        setLoading(true);
        await props.jobPost(jobDetails);
        setLoading(false)
        close()
    }
    const resetInputVal=()=>{
        setJobDetails(preState)
        setLoading(false)
        close()
    }

    return(
<Dialog open={popup} fullWidth>
    <DialogTitle>
        <Box display="flex" alignItems="center" justifyContent="space-between">
        Post Job
        <IconButton onClick={resetInputVal}>
            <Close />
        </IconButton>
        </Box>
    </DialogTitle>
    <DialogContent>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <FilledInput onChange={handleChange} name='title' value={jobDetails.title}  autoComplete='off'   placeholder="Job Title *" disableUnderline fullWidth/>
                
            </Grid>
            <Grid item xs={6} >
            <Select onChange={handleChange} name='type' value={jobDetails.type} variant="filled" disableUnderline defaultValue='' fullWidth>
                    <MenuItem value='Full Time'>Full Time</MenuItem>
                    <MenuItem value='Part Time'>Part Time</MenuItem>
                    <MenuItem value='Contract'>Contract</MenuItem>
            </Select>
            </Grid>
            <Grid item xs={6}>
                <FilledInput onChange={handleChange} name='companyName' value={jobDetails.companyName} autoComplete='off'   placeholder="Company Name *" disableUnderline fullWidth/>
                
            </Grid>
            <Grid item xs={6}>
                <FilledInput onChange={handleChange} name='companyUrl' value={jobDetails.companyUrl}  autoComplete='off'  placeholder="Company URL *" disableUnderline fullWidth/>   
            </Grid>
            <Grid item xs={6}>
            <Select onChange={handleChange}   name='location' value={jobDetails.location} variant="filled" disableUnderline defaultValue='' fullWidth>
                    <MenuItem value='Remote'>Remote</MenuItem>
                    <MenuItem value='In Office'>In Office</MenuItem>
                    <MenuItem value='Hybrid'>Hybrid</MenuItem>
            </Select>
            </Grid>
            <Grid item xs={6}>
                <FilledInput onChange={handleChange} name='link' value={jobDetails.link} autoComplete='off'  placeholder="Job Link *" disableUnderline fullWidth/>   
            </Grid>
            <Grid item xs={12}>
                <FilledInput onChange={handleChange} name='description' value={jobDetails.description} autoComplete='off'   placeholder="Job Description *" disableUnderline fullWidth multiline rows={4}/>   
            </Grid>
        </Grid>
        <Box mt={2}>
            <Typography>Skills</Typography>
            <Box display={"flex"}>
            {skill.map(skill=><Grid onClick={()=>{addRemoveSkills(skill)}} key={skill} sx={style2} item>{skill}</Grid>)}
            </Box>
        </Box>
    </DialogContent>
    <DialogActions>
        <Box color='red' width='100%' display='flex' justifyContent="space-between" alignItems='center' >
            <Typography variant="caption">* Required fields</Typography>
            <Button onClick={handleSubmit} variant='contained' color='primary' disabled={loading}>
                {loading?<CircularProgress color="secondary" size={22}/>:"Post Job"}</Button>
        </Box>
    </DialogActions>
</Dialog>
    )
}
export default PostJob;