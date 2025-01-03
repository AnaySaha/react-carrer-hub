import {useEffect, useState} from "react";
import Job from "../Job/Job";

const FeatureJobs = () => {
    const [jobs, setJobs] = useState([]);

    const [dataLenght, setDataLenght] = useState(4);

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
                    jobs.slice(0, dataLenght).map(job => 
                    <Job key={job.id} job ={job}></Job>)
                }
            </div>
            <div className={ dataLenght === jobs.length && 'hidden'}>
                <button onClick={() => setDataLenght(jobs.length)} className="btn btn-primary">
                    Show All Jobs
                </button>  
            </div>
        </div>
    );
};

export default FeatureJobs;