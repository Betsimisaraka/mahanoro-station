import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCities } from '../actions';

import{ Cities } from '../components';

function CitiesContainer() {
    const destinations = useSelector(state => state.destinations);

    const cities = useSelector(state => state.cities);
    console.log(cities);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCities());
    }, [])

    return (
        <Cities>
            <Cities.Title>Where are you going?</Cities.Title>
            {destinations.map(city => (
                <Cities.Link to={`/city/${city.city}`} key={city.id}>
                    <Cities.SubTitle>{city.city}</Cities.SubTitle>
                </Cities.Link>
            ))}
        </Cities>
        // <div>
        //     {cities.filter(city => (
        //         <p>{city.destination === "Toamasina" ? "Toamasina" : null}</p>
        //     ))}
        // </div>
    )
}

export default CitiesContainer