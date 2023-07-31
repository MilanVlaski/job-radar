import React from "react";
import {HeaderCard} from "../../shared/components/HeaderCard";
import {CustomCard} from "../../shared/components/layout/CustomCard";
import {useAuth} from "../../modules/auth";
import {ProfileOverviewItem} from "./ProfileOverviewItem";

export const ProfileOverview = () => {
    const {currentUser} = useAuth();

    return (
        <>
            <CustomCard width="96%">
                <HeaderCard title="Overview" className="mt-4 mb-4">Overview of users information</HeaderCard>
                <CustomCard className="shadow rounded mb-4">
                    <div className="fs-4 border-bottom p-3 fw-bold mb-3" style={{color: '#010b1d'}}>Profile details</div>
                    <ProfileOverviewItem label='Full name'>{currentUser.name}</ProfileOverviewItem>
                    <ProfileOverviewItem label='Email'>{currentUser.email}</ProfileOverviewItem>
                    <ProfileOverviewItem label='Contact phone'>{currentUser.phone}</ProfileOverviewItem>
                    <ProfileOverviewItem label='Date of birth'>{(new Date(currentUser.birthDate)).toLocaleString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</ProfileOverviewItem>
                    <ProfileOverviewItem label='Gender'>{currentUser.gender}</ProfileOverviewItem>
                    <ProfileOverviewItem label='Country'>{currentUser.country}</ProfileOverviewItem>
                    <ProfileOverviewItem label='Occupation'>{currentUser.occupation}</ProfileOverviewItem>
                    <ProfileOverviewItem label='Language'>{currentUser.language}</ProfileOverviewItem>
                    <ProfileOverviewItem label='Company name'>{currentUser.companyName}</ProfileOverviewItem>
                    <ProfileOverviewItem label='Website'>{currentUser.website}</ProfileOverviewItem>
                </CustomCard>
            </CustomCard>
        </>
)
}