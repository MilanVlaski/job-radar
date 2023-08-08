import React from "react";
import {KTSVG} from "../../../_metronic/helpers";
import {DownloadButton} from "./DownloadButton";

export function UserListingDetails(props) {
    return <div className={'container card-body'}>
        <div className={'fw-row d-flex justify-content-start align-items-center'}>
             <span className={'me-2 col-4'}>
                <KTSVG path={'/media/icons/duotune/general/gen014.svg'} className={'svg-icon-2x svg-icon-dark'}/>
                <span className={'mx-2'}>{props.item.user.birthDate}</span>
            </span>
            <span className={'me-2 col-4'}>
                <KTSVG path={'/media/icons/duotune/maps/map008.svg'} className={'svg-icon-2x svg-icon-dark'}/>
                <span className={'mx-2'}>{props.item.user.country}</span>
            </span>
            <span className={'me-2 col-4'}>
                <KTSVG path={'/media/icons/duotune/general/gen049.svg'} className={'svg-icon-2x svg-icon-dark'}/>
                <span className={'mx-2'}>{props.item.user.gender}</span>
            </span>

        </div>
        <hr/>
        <div className={'fw-row d-flex justify-content-start align-items-center'}>
        <span className={'me-2'}>
                <KTSVG path={'/media/icons/duotune/art/art008.svg'} className={'svg-icon-2x svg-icon-dark'}/>
                <span className={'mx-2'}>{props.item.user.language}</span>
            </span>
        </div>
        <hr/>
        <div className={'fw-row d-flex justify-content-start align-items-center'}>
            <DownloadButton icon={'/media/icons/duotune/files/fil021.svg'} name={'Download CV'}/>
        </div><hr/>
        <div className={'fw-row d-flex justify-content-start align-items-center'}>
       <DownloadButton icon={'/media/icons/duotune/files/fil021.svg'} name={'Download Cover Letter'}/>
        </div><hr/>
    </div>
}