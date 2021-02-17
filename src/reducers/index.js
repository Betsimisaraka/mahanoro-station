import {combineReducers} from 'redux';

function cities(state = [], action) {
    switch(action.type) {
        case "GET_CITIES":
            return action.payload;
        // case "IS_SELECTED": {
        //     const upDatedVailable = state.map(item => {
        //         if (item.id === action.payload) {
        //             return {
        //                 ...item,
        //                 seats: {
        //                     ...item.seats,
        //                     isAvailable: !item.seats.isAvailable
        //                 }
        //             }
        //         }
        //         return item;
        //     })
        //     return upDatedVailable;
        // }
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

function currentUser(state = [], action) {
    switch (action.type) {
        case "GET_CURRENT_USER":
            return action.payload
        default:
            return state;
    }
}

function booking(state = [], action) {
    switch (action.type) {
        case "ADD_ACTION":
            return [...state, action.payload];
        case "REMOVE_BOOKING": {
            const removeBooking = state.filter(item => item.id !== action.payload);
            return [...removeBooking];
        }
        default:
            return state;
    }
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
        case "RESET_COUNT":
            return state;
        case "SET_COUNT_SEATS":
            return state + 1;
        default:
            return state;
    }
}

// function selected(state = false, action) {
//     console.log(state);
//     switch (action.type) {
//         case "IS_SELECTED":
//             return !state;    
//         default:
//            return state;
//     }
// }

function total(state = 0, action) {
    switch (action.type) {
        case "RESET_TOTAL":
            return state;
        case "SET_TOTAL":
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    cities,
    destinations,
    currentUser,
    displayModal,
    countSeats,
    booking,
    total,
    // selected,
})