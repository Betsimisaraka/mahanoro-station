import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Cities from './components/Cities';
import Destination from './components/Destination';
import Trip from './components/Trip';

export default function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Cities />
                </Route>
                <Route path="/city/:destination">
                    <Destination />
                </Route>
                <Route path="/trip/:tripId">
                    <Trip />
                </Route>
            </Switch>
        </div>
    )
}
