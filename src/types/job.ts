import { JobType } from "../config/constant";

export interface Job {
    id: number;
    title: string;
    description: string;
    location: string;
    company: string;
    min_salary: number;
    skills: string;
    experience_level: string;
    max_salary: number;
    type: JobType;
    created_at: string;
    user_id: number;
}