import {combineReducers} from 'redux';

function cities(state = [], action) {
    switch(action.type) {
        case "GET_CITIES":
            return action.payload
        default:
            return state;
    }
}

function destinations(state = [], action) {
    switch (action.type) {
        case "SET_DESTINATION":
            return action.payload
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
    return state;
}

export default combineReducers({
    cities,
    destinations,
    users,
    displayModal,
    countSeats,
})