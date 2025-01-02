import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Job } from "../../types/job";
import { JobFilterValues } from "../../components/features/job/JobFilter/JobFilter";
import { jobService } from "../../services/api/job.service";

interface JobState {
    jobs: Job[];
    orgJobs: Job[];
    loading: boolean;
    error: string | null;
}

const initialState: JobState = {
    jobs: [],
    orgJobs: [],
    loading: false,
    error: null,
};

export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async (filters: Partial<JobFilterValues>, { rejectWithValue }) => {
    try {
        const response = await jobService.getJobs(filters);
        return response;
    } catch (error) {
        return rejectWithValue(error instanceof Error ? error.message : 'Failed to fetch jobs');
    }
})

const jobSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {
        setFilterJobs: (state: JobState, action: PayloadAction<JobFilterValues>) => {
            state.jobs = state.orgJobs.filter((job) => {
                const matchesSearch =
                    !action.payload.search || job.title.toLowerCase().includes(action.payload.search.toLowerCase());
                const matchesLocation =
                    !action.payload.location || job.location.toLowerCase().includes(action.payload.location.toLowerCase());
                const matchesType =
                    !action.payload.type || job.type === action.payload.type;
                const matchesMinSalary =
                    !action.payload.minSalary || job.min_salary >= Number(action.payload.minSalary);

                return matchesSearch && matchesLocation && matchesType && matchesMinSalary;
            });
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchJobs.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchJobs.fulfilled, (state, action) => {
                state.loading = false;
                state.jobs = action.payload;
                state.orgJobs = action.payload;
            })
            .addCase(fetchJobs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    }
});

export const { setFilterJobs } = jobSlice.actions;
export default jobSlice.reducer;