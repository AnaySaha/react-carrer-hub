import {useEffect, useState} from "react";
import Job from "../Job/Job";

const FeatureJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <div>
                <h2>feature jobs: {jobs.length}</h2>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.map(job => 
                    <Job key={job.id} job ={job}></Job>)
                }
            </div>
        </div>
    );
};

export default FeatureJobs;