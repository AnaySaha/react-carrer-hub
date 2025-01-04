import { useParams } from "react-router-dom";


const Jobdetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)
    console.log(id, jobs);

    const handleApplyJob = () =>{
        toast('You have applied successfully');
    }
    return (
        <div>
            <h2>Jobs Details of: {id}
            </h2>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2 className="text-4xl"> details coming soon </h2>
                </div>
                <div className="border">
                    <h2 className="text-2xl">Side Things</h2>
                <button className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default Jobdetails;