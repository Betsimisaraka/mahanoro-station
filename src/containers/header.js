import React from 'react';

import { Header } from '../components';

export default function HeaderContainer() {
    return (
        <Header>
            <Header.Link to="/">
                <Header.Title>Mahanoro station</Header.Title>
            </Header.Link>
            <Header.Link to="/account/:accountId">
                <Header.Small>My accout</Header.Small>
            </Header.Link>
        </Header>
    )
}
