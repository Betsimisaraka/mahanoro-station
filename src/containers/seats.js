import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {isSelected, setCountSeats} from '../actions';
import { Seats} from '../components';

export default function SeatsContainer({ findId }) {
    const dispatch = useDispatch();

    const [selected, setSelected] = useState(false);

    function handleSeats(seatId) {
        console.log(seatId);
        const mapSeats = findId.seats.map(seat => {
            if (seat.id === seatId) {
                return {
                    ...seat,
                    isAvailable: !seat.isAvailable
                }
            }
            
        })
        dispatch(setCountSeats(seatId));
        setSelected(!selected)
        return mapSeats;
    }

    return (
        <Seats>
                <Seats.Title>Pick a seat</Seats.Title>  
                <Seats.Base>
                    {findId && findId.seats.map(seat => (
                        <Seats.Group key={seat.id}>
                            <Seats.Button 
                                onClick={() => 
                                        handleSeats(seat.id)
                                   } 
                                className={`${seat.isAvailable ? "isvailable" : "notvailable"}`}
                            >💺</Seats.Button>
                        </Seats.Group>
                    ))}
                </Seats.Base>              
            </Seats>
    )
}
