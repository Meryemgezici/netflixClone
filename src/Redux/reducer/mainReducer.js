import { actionTypes } from "../actions/actionTypes";

const initialState = {
    popularMovies: [],
    genres: [],
    isLoading: true,
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_MOVIES:
            return { ...state, popularMovies: action.payload, isLoading: false };

        case actionTypes.SET_CATEGORY:
            return {...state,genres:action.payload}
        default:
            return state;
    }
}