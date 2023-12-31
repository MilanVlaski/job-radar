import React from "react";
import {JobApplication} from "../../shared/models/job-application.model";
import {ApplicationPhases} from "../../shared/enums/application-phases";

type JobApplicationItemProps = {
    item: JobApplication
}

export const JobApplicationItem: React.FC<JobApplicationItemProps> = (props) => {
    const {
        item
    } = props

    const expired = (new Date(item.job.appDeadline)) < new Date();

    return (
        <div className={`p-4 mb-1 fs-6 border-end border-bottom card-bg shadow-sm border-radius card-bg`}>
            <div>
                {expired ? <span className="d-flex justify-content-between align-items-center">
                    <i className="bi bi-bag-heart text-danger" style={{fontSize: '1.3rem'}}></i>
                    <span className="badge text-bg-danger">expired</span>
                </span> : <span className="d-flex justify-content-between align-items-center">
                    <i className="bi bi-bag-heart text-success" style={{fontSize: '1.3rem'}}></i>
                    <span className="badge text-bg-success">active</span>
                </span>}
                <p className="mb-0 mt-1 fw-bold text-label fs-5">{item.job.title}</p>
                <div className={'d-flex flex-column'}>
                    <span className={'text-label'}>
                        <i className={`bi bi-clock-history ${expired ? 'text-danger' : 'text-success'}`}></i>
                        {' '}{(new Date(item.job.appDeadline)).toLocaleString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}
                    </span>
                    <span className={'text-label col-12'}>
                        <label htmlFor="">Phase: </label> &emsp;
                        {ApplicationPhases[item.applicationPhase]}
                    </span>
                </div>
                <hr/><div className={'text-label'}>My phone: {item.phoneNumber}</div>
                {item.cv && <span className={'text-label'}><i className="bi bi-check-circle-fill text-success"></i> CV </span>}
                {item.coverLetter && <span className="ms-2 text-label"><i className="bi bi-check-circle-fill text-success"></i> Cover letter</span>}
            </div>
        </div>
    )
}