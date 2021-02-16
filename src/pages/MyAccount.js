import React from 'react'
import MyAccountContainer from '../containers/account'
import HeaderContainer from '../containers/header'

export default function MyAccount() {
    return (
        <div>
            <HeaderContainer />
            <MyAccountContainer />
        </div>
    )
}
