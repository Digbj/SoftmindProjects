import {ThemeProvider} from '@mui/material/styles'
// import './App.css'
import { useState,useEffect } from 'react';
import theme from './theme/theme';
import Header from './components/home';
import { CircularProgress, Grid,Box} from '@mui/material';
import Search from './components/search';
import JobCard from './components/jobcard';
import PostJob from './components/postJob';
import { fireDB} from './firebase/config';
import { collection, query, orderBy, getDocs,addDoc,serverTimestamp } from "firebase/firestore";
function App() {
const [job,setJobs]=useState([])
const [loading,setLoading]=useState(true);
const [popup,setPopup]=useState(false);
const fetchJobs = async () => {
  try {
    const jobCollection = collection(fireDB, "job");
    const q = query(jobCollection, orderBy("postedOn", "desc"));
    const querySnapshot = await getDocs(q);
    const jobData = querySnapshot.docs.map((doc) => ({...doc.data(),id:doc.id,postedOn:doc.data().postedOn.toDate()}));
    // Assuming you have a function like setJobs to update your state or display data.
    setJobs(jobData);
    setLoading(false)
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const jobPost = async (jobDetails) => {
  try {
    const jobCollection = collection(fireDB, "job");
    await addDoc(jobCollection, {
      ...jobDetails,
      postedOn: serverTimestamp(),
      
    });
    fetchJobs()
  } catch (error) {
    console.error("Error posting job:", error);
  }
 
};
console.log(job)
useEffect(()=>{
  fetchJobs();
},[])
  return (
  <ThemeProvider theme={theme}>
<Header popup={()=>setPopup(true)}/>
<PostJob close={() => setPopup(false)} popup={popup} jobPost={jobPost} />

<Grid container justifyContent='center'>
  <Grid item xs={10}>
    <Search/>
    {loading?<Box display='flex' justifyContent='center'><CircularProgress/></Box>:<>{job.map(job=><JobCard key={job.id} {...job}/>)}</>}
    
  </Grid>

</Grid>
  </ThemeProvider>
  )
}

export default App


