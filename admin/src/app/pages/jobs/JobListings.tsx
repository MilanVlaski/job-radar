import React, {useEffect, useState} from "react";
import {JobListingItem} from "./JobListingItem";
import {getJobs} from "../../shared/services/job.service";
import {Alert} from "../../shared/components/Alert";
import {Spinner} from "react-bootstrap";
import {useIntl} from "react-intl";

export const JobListings = () => {
    const intl = useIntl();

    const [jobListings, setJobListings] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const fetchJobListings = async () => {
        setLoading(true);
        setError(null);
        try {
            const jobs = await getJobs();
            setJobListings(jobs);
        } catch(error) {
            setError("Error while getting job listings.");
        }
        setLoading(false);
    }
    useEffect(() => {
        fetchJobListings();
    }, []);

    let jobListingsContent = <Alert state="primary" icon="icons/duotune/general/gen021.svg">{intl.formatMessage({id: 'JOB_LISTING.MESSAGE.NO_JOB_LISTINGS'})}</Alert>;

    if (jobListings) {
        const currentJobListings = jobListings.map(jobListing => (
            <JobListingItem
                key={jobListing.id}
                item={jobListing}
                update={fetchJobListings}
            />
        ));
        jobListingsContent = <div>{currentJobListings}</div>;
    }

    return (
        <>
            {loading &&  <div className="d-flex align-items-center justify-content-center" style={{ height: '100%' }}>
                <div className="text-center">
                    <Spinner animation="border"></Spinner>
                </div>
            </div>}
            {!loading && error && <Alert state="danger" icon="icons/duotune/general/gen040.svg">{error}</Alert>}
            {!loading && !error && jobListingsContent}
        </>
    );
}