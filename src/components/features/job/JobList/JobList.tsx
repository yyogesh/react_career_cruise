import JobCard from "../JobCard/JobCard"

const jobs = [
    {
        "id": 1,
        "title": "ReactJS developer",
        "description": "ReactJS senior developers",
        "location": "Delhi",
        "company": "ABC",
        "min_salary": 1500000,
        "experience_level": "senior",
        "skills": "ReactJS, NodeJS",
        "max_salary": 2500000,
        "type": "full-time",
        "created_at": "2024-12-28T04:52:26Z",
        "user_id": 2
    },
    {
        "id": 2,
        "title": "Golang developer",
        "description": "Golang senior developers",
        "location": "Hydrabad",
        "company": "ABC",
        "min_salary": 1500000,
        "experience_level": "senior",
        "skills": "Golang, Sql",
        "max_salary": 2500000,
        "type": "full-time",
        "created_at": "2024-12-28T05:05:20Z",
        "user_id": 2
    }
]
const JobList = () => {
    return (
        <div className="py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Featured Jobs</h1>
            <div className="grid gap-6">
                {jobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>
        </div>
    )
}

export default JobList