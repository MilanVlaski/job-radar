 import ApiClient from "./api-client/api-client";
import {JobListing, JobResponse} from "../models/job-listing.model";

const JOBS_ENDPOINT = '/jobs';

 const getJobs = (title?: string, location?: string, filter?: string): Promise<JobResponse | null> => {
     let query: string = '&populate=employer,requirements';
     if(title) {query += "&searchTitle=" + title;}
     if(location) {query += "&searchLocation=" + location;}
     return ApiClient.get(JOBS_ENDPOINT, query)
         .then(response => response.data)
         .then(data => {
             return new JobResponse(data);
         })
         .catch((err) => {
             console.log(err);
             return null;
         });
 };

const getJob = (jobId: string): Promise<JobListing | null> => {
    return ApiClient.get(`${JOBS_ENDPOINT}/${jobId}`)
        .then(response => response.data)
        .then(data => new JobListing(data));
};

const removeJob = (jobId): Promise<JobListing | null>  => {
    return ApiClient.remove(JOBS_ENDPOINT, jobId).then(response => response.data);
};
export {getJob, getJobs, removeJob}

