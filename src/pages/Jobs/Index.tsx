import JobFilter from "../../components/features/job/JobFilter/JobFilter"
import JobList from "../../components/features/job/JobList/JobList"

const Jobs = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
       <h1 className="text-4xl text-gray-900 mb-8 text-center">
        Find Your Next Job
      </h1>
      <JobFilter />
      <JobList/>
    </div>
  )
}

export default Jobs