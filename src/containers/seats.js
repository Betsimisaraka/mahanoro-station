import React, { useEffect, useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {isSelected, setCountSeats} from '../actions';
import { Seats} from '../components';

export default function SeatsContainer({ findId }) {
    const dispatch = useDispatch();

    const [selected, setSelected] = useState(false);
    console.log(selected);

    function handleSeats(seatId) {
        dispatch(isSelected(seatId));
        dispatch(setCountSeats(seatId));
        setSelected(!selected);
    }

    return (
        <Seats>
                <Seats.Title>Pick a seat</Seats.Title>  
                <Seats.Base>
                    {findId && findId.seats.map(seat => (
                        <Seats.Group key={seat.id}>
                            <Seats.Button 
                                // ref={btnRef}
                                onClick={() => {
                                    if (seat.isAvailable) {
                                        handleSeats(seat.id)
                                    } 
                                   } 
                                }
                                className={`${seat.isAvailable ? "isvailable" : "notvailable"}`}
                            >
                                <img src="../images/emojione_seat.svg" alt="Chairs" />
                            </Seats.Button>
                        </Seats.Group>
                    ))}
                </Seats.Base>              
            </Seats>
    )
}
