import { useState } from "react";
import Input from "../../../common/Input/Input";
import { JOB_TYPES } from "../../../../config/constant";
import Button from "../../../common/Button/Button";
import { useAppDispatch } from "../../../../store/hook";
import { setFilterJobs } from "../../../../store/slice/jobSlice";


export interface JobFilterValues {
    search: string;
    location: string;
    type: string;
    minSalary: string;
}

const initialFilers: JobFilterValues = {
    search: '',
    location: '',
    type: '',
    minSalary: '',
}

const JobFilter = () => {
    const dispatch = useAppDispatch();
    const [filters, setFilters] = useState<JobFilterValues>(initialFilers);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(setFilterJobs(filters));
    }

    const handleReset = () => {
        setFilters(initialFilers);
        dispatch(setFilterJobs(filters));
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <Input
                    label="Search"
                    name="search"
                    value={filters.search}
                    onChange={handleChange}
                    placeholder="Job title or keywords"
                />

                <Input
                    label="Location"
                    name="location"
                    value={filters.location}
                    onChange={handleChange}
                    placeholder="City or country"
                />

                <div className="flex flex-col space-y-1">
                    <label
                        htmlFor="type"
                        className="text-sm font-medium text-gray-700"
                    >
                        Job Type
                    </label>
                    <select
                        id="type"
                        name="type"
                        value={filters.type}
                        onChange={handleChange}
                        className="p-2 border border-gray-300 rounded-md text-base text-gray-700 bg-white 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     transition duration-200"
                    >
                        <option value="">All Types</option>
                        {JOB_TYPES.map((type) => (
                            <option key={type} value={type}>
                                {type.charAt(0).toUpperCase() + type.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>

                <Input
                    label="Min Salary"
                    name="minSalary"
                    type="number"
                    value={filters.minSalary}
                    onChange={handleChange}
                    placeholder="Minimum salary"
                />
            </div>
            <div className="flex flex-col md:flex-row justify-end space-y-2 md:space-y-0 md:space-x-4">
                <Button type="submit">Apply Filters</Button>
                <Button type="button" variant="outline" onClick={handleReset}>
                    Reset
                </Button>
            </div>
        </form>
    )
}

export default JobFilter