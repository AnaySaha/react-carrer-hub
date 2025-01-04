import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../localstorage";
import { list } from "postcss";


const Appliedjobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([];)
   
    const handleJobsFilter = filter =>{
        if(filter === 'all'){
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'remote'){
            const remoteJobs = appliedJobs.filter
            (job => job.remote_or_onsite === 'remote')
            setDisplayJobs(remoteJobs);

        }
    }
   
   
   
    useEffect( () =>{
        const storedJobIds = getStoredJobApplication();
        // if(jobs.lenght > 0){
        // //     const jobAppllied = jobs.filter(job => storedJobIds.includes (job.id))
        })

    const jobsApplied = [];
    for(const id of storedJobIds){
        const job = jobs.find(job => job.id === id);
        if(job){
            jobsApplied.push(job)
        }
    }
    setAppliedJobs(jobsApplied);
    setDisplayJobs(displayJobs);

    return (
        <div>
           <h2>Jobs I Applied: {appliedJobs.length}</h2> 
        <ul>
            {
                appliedJobs.map(job => <li  key ={job.id}>
                  <span>{job.job_title} {job.company_name}: {job.remote_or_onsite}</span>
                </li>)
            }
        </ul>
        </div>
    );
};

export default Appliedjobs;