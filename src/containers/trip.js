import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToBooking } from '../actions';

import { Trip } from '../components';
import SeatsContainer from './seats';
import TripInfoContainer from './tripInfo';

function TripContainer() {
    const cities = useSelector(state => state.cities);
    
    const { tripId } = useParams();
    const findId = cities && cities.find(city => city.id === Number(tripId));

    return (
        <Trip>
            <Trip.Title>Book a seat to: <Trip.Span>{findId && findId.destination}</Trip.Span></Trip.Title>   
            <SeatsContainer findId={findId} />
            <TripInfoContainer findId={findId} />
        </Trip>
    )
}

export default TripContainer;