export function getCities() {
    return async (dispatch) => {
        const response = await fetch("https://gist.githubusercontent.com/Pinois/36bb5fbf9b6a686f0baf4006dd137bca/raw/a40d8b3f696a75f388db286d57bdd05a925fa0e7/trips.json")
        const data = await response.json();
        dispatch({
            type: "GET_CITIES",
            payload: data,
        })
    }
}

export function setDestination(data) {
    return {
        type: "SET_DESTINATION",
        payload: data
    }
}

export function toggleModal() {
    return {
        type: "SHOW_MODAL",
    }
}

export function setCountSeats() {
    return {
        type: "SET_COUNT_SEATS",
    }
}

export function isSelected(tripId) {
    return {
        type: "IS_SELECTED",
        payload: tripId,
    }
}

export function getCurrentUser(userId) {
    return {
        type: "GET_CURRENT_USER",
        payload: userId,
    }
}