

const Job = ({ job }) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location,
        job_type, salary} = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={logo} alt="Shoe" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>

          <div>
            <button className="px-5 py-2 font-extrabold border rounded
            mr-4">{remote_or_onsite}</button>
            <button className="x-5 py-2 font-extrabold border rounded
            mr-4">{job_type}</button>
          </div>
            <div>
                <h2 className="flex"> <MdLocation className="text-2xl"></MdLocation>
              {Location} </h2>
            </div>
          <div className="card-actions">
            <Link to={`/job/${id}`}></Link>
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    );
};

export default Job;