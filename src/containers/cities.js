import React from 'react';
import { useSelector } from 'react-redux';

import{ Cities } from '../components';

function CitiesContainer() {
    const destinations = useSelector(state => state.destinations);

    return (
        <Cities>
            <Cities.SubTitle>Where are you going?</Cities.SubTitle>
            {destinations.map(city => (
                <Cities.Link to={`/city/${city.city}`} key={city.id}>
                    <Cities.Title>{city.city}</Cities.Title>
                </Cities.Link>
            ))}
        </Cities>
    )
}

export default CitiesContainer