import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Destination from './components/Destination';

export default function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/">
                    <Destination />
                </Route>
            </Switch>
        </div>
    )
}
