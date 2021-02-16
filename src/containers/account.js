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
            <Account.Frame>
                <Account.Image src="../images/flat-ui-user-interface.svg" alt="User interface" />
                <Account.Title>My account <span>{findCurrentUser.firstName} {findCurrentUser.lastName}</span> </Account.Title>
            </Account.Frame>
            <Account.Group>
                <PersonalInfoContainer findCurrentUser={findCurrentUser}/>
                <MyBookingContainer />
            </Account.Group>
        </Account>
    )
}
