import { JobFilterValues } from "../../components/features/job/JobFilter/JobFilter"
import { API_ENDPOINTS } from "../../config/constant"
import { Job } from "../../types/job"
import { api } from "./axios.config"

export const jobService = {
    async getJobs(params: Partial<JobFilterValues>): Promise<Job[]>{
        const {data} = await api.get<Job[]>(API_ENDPOINTS.JOBS.BASE, {params})
        
        return data;
    }
}