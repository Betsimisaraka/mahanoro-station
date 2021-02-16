import React from 'react';
import { useParams } from 'react-router-dom';
import MyBookingContainer from './myBooking';
import PersonalInfoContainer from './personalInfo';

export default function MyAccountContainer() {
    const {accountId} = useParams();
    console.log(accountId);
    return (
        <div>
            <h2>My account <span></span> </h2>
            <div>
                <PersonalInfoContainer />
                <MyBookingContainer />
            </div>
        </div>
    )
}
