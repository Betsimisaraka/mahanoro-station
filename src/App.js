import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {Home, Destination, Trip} from './pages';

export default function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Home />
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
