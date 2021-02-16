import React, { useState } from 'react';
import { PersonalInfo } from '../components';

export default function PersonalInfoContainer({ findCurrentUser }) {

    const [firstName, setFirstName] = useState(findCurrentUser.firstName);
    const [lastName, setLastName] = useState(findCurrentUser.lastName);
    const [phoneNumber, setPhoneNumber] = useState(findCurrentUser.phoneNumber);
   
    return (
        <PersonalInfo>
            <PersonalInfo.Title>My personnal informations:</PersonalInfo.Title>
            <PersonalInfo.Base>
                <PersonalInfo.Group>
                    <PersonalInfo.Label>First name</PersonalInfo.Label>
                    <PersonalInfo.Input type="text" name="" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </PersonalInfo.Group>
                <PersonalInfo.Group>
                    <PersonalInfo.Label>Last name</PersonalInfo.Label>
                    <PersonalInfo.Input type="text" name="" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </PersonalInfo.Group>
                <PersonalInfo.Group>
                    <PersonalInfo.Label>Phone number</PersonalInfo.Label>
                    <PersonalInfo.Input type="text" name="" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </PersonalInfo.Group>
                <PersonalInfo.Submit>Update</PersonalInfo.Submit>
            </PersonalInfo.Base>
        </PersonalInfo>
    )
}
