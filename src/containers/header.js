import React from 'react';
import { useSelector } from 'react-redux';

import { Header } from '../components';

export default function HeaderContainer() {
    const currentUser = useSelector(state => state.currentUser);
    console.log(currentUser);

    return (
        <Header>
            <Header.Link to="/">
                <img src="../images/vector.svg" alt="Bus" />
                <Header.Title>Mahanoro station</Header.Title>
            </Header.Link>
            { currentUser.map(user => (
                <Header.Link key={user.id} to={`/account/${user.id}`}>
                    <Header.Small>My account</Header.Small>
                </Header.Link>
            ))}
        </Header>
    )
}
