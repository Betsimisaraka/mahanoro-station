import React from 'react';
import { useSelector } from 'react-redux';

import{ Cities } from '../components';

function CitiesContainer() {
    const destinations = useSelector(state => state.destinations);

    return (
        <Cities>
            <Cities.Title>Where are you going?</Cities.Title>
            {destinations.map(city => (
                <Cities.Link to={`/city/${city.city}`} key={city.id}>
                    <Cities.SubTitle>{city.city}</Cities.SubTitle>
                </Cities.Link>
            ))}
        </Cities>
    )
}

export default CitiesContainer