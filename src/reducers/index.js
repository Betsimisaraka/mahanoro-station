import {combineReducers} from 'redux';

function cities(state = [], action) {
    switch(action.type) {
        case "GET_CITIES":
            return action.payload;
        case "IS_SELECTED": {
            const upDatedVailable = cities.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        seats: {
                            ...state.seats,
                            isValuable: !state.seats.isValuable,
                        }
                    }
                }
                return item;
            })
            return upDatedVailable;
        }
        default:
            return state;
    }
}

function destinations(state = [], action) {
    switch (action.type) {
        case "SET_DESTINATION":
            return action.payload;
        default:
            return state;
    }
}

function users(state = [], action) {
    return state
}

function displayModal(state = false, action) {
    switch (action.type) {
        case "SHOW_MODAL":
            return !state;
        default:
            return state;
    }
}

function countSeats(state = 0, action) {
    switch (action.type) {
        case "SET_COUNT_SEATS":
            return state + 1;
        default:
            return state;
    }
}

function selected(state = false, action) {
    console.log(state);
    switch (action.type) {
        case "IS_SELECTED":
            return !state;    
        default:
           return state;
    }
}

export default combineReducers({
    cities,
    destinations,
    users,
    displayModal,
    countSeats,
    selected,
})