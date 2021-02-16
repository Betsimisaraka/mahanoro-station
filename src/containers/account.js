import React from 'react';
import { useParams } from 'react-router-dom';
import {useSelector} from 'react-redux';
import MyBookingContainer from './myBooking';
import PersonalInfoContainer from './personalInfo';
import { Account } from '../components';

export default function MyAccountContainer() {
    const currentUser = useSelector(state => state.currentUser);
    const {accountId} = useParams();

    const findCurrentUser = currentUser.find(user => user.id !== accountId);
    
    return (
        <Account>
            <Account.Title>My account <p>{findCurrentUser.firstName} {findCurrentUser.lastName}</p> </Account.Title>
            <Account.Group>
                <PersonalInfoContainer findCurrentUser={findCurrentUser}/>
                <MyBookingContainer />
            </Account.Group>
        </Account>
    )
}
