import { Link } from "react-router-dom"
import { Job } from "../../../../types/job"
import { MapPin, DollarSign, Briefcase, Clock, ChevronRight } from "lucide-react"
import { formatCurrency } from "../../../../services/utils/helpers"

const JobCard = ({ job }: { job: Job }) => {
    return (
        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
            <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-2xl font-bold text-gray-400">
                        {job.company.charAt(0)}
                    </div>
                </div>
                <div className="flex-grow">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-3">
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                                <Link to={`/jobs/${job.id}`}>{job.title}</Link>
                            </h2>
                            <div className="text-gray-600 text-sm">{job.company}</div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700">
                                {job.type}
                            </span>
                        </div>
                    </div>

                    {/* Job Details */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div className="flex items-center gap-2 text-gray-600">
                            <MapPin size={16} className="text-gray-400" />
                            <span className="text-sm">{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <DollarSign size={16} className="text-gray-400" />
                            <span className="text-sm">
                                {formatCurrency(job.min_salary, 'USD')} -
                                {formatCurrency(job.max_salary, 'USD')}
                            </span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <Briefcase size={16} className="text-gray-400" />
                            <span className="text-sm">{job.experience_level}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <Clock size={16} className="text-gray-400" />
                            <span className="text-sm">Posted {job.created_at}</span>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {job.description.length > 200
                            ? `${job.description.substring(0, 200)}...`
                            : job.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-3">
                            {job.skills}
                        </div>
                        <div className="flex items-center gap-4">
                            <Link
                                to={`/jobs/${job.id}`}
                                className="text-blue-600 text-sm font-medium hover:text-blue-700 flex items-center gap-1"
                            >
                                View Details
                                <ChevronRight size={16} />
                            </Link>
                            <button
                                
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                            >
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobCard