import {useEffect, useState} from "react";
import {JobListingItem} from "./JobListingItem";
import {JobListing} from "../../shared/models/job-listing.model";

const DUMMY_JOB_LISTINGS: JobListing[] = [
    new JobListing({
        id: '11',
        job_title: "Job title 1",
        company_name: "Company 1",
        location: "Location 1",
        application_deadline: new Date('2023-06-30'),
        description: 'Description 1',
        requirements: 'Requirements 1',
        applicationInstructions: 'Instructions 1'
    }),
    new JobListing({
        id: '12',
        job_title: "Job title 2",
        company_name: "Company 2",
        location: "Location 2",
        application_deadline: new Date('2023-07-12'),
        description: 'Description 2',
        requirements: 'Requirements 2',
        applicationInstructions: 'Instructions 2'
    }),
    new JobListing({
        id: '13',
        job_title: "Job title 3",
        company_name: "Company 3",
        location: "Location 3",
        application_deadline: new Date('2023-07-11'),
        description: 'Description 3',
        requirements: 'Requirements 3',
        applicationInstructions: 'Instructions 3'
    })
];

export const JobListings = () => {
    const [jobListings, setJobListings] = useState([]);

    useEffect(() => {
        //fetch job listings
        setJobListings(DUMMY_JOB_LISTINGS);
    }, []);

    let jobListingsContent = <div className="alert alert-primary text-center" role="alert">
        No job listings found.
    </div>;

    if(jobListings) {
        const currentJobListings = jobListings.map(jobListing => (
                <JobListingItem
                    key={jobListing.id}
                    item={jobListing}
                />
        ));
        jobListingsContent = <div>{currentJobListings}</div>;
    }

    return (
        jobListingsContent
    );
}