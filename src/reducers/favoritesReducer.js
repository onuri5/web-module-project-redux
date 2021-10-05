import { FAVORITE_MOVIE } from "../actions/movieActions";


const initialState = {
    favorites: [],
    displayFavorites: true
}

const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        case(FAVORITE_MOVIE):
            
            return({
                ...state,
                favorites: [action.payload, ...state.favorites]
            })
        
        default:
            return state;
    }
}


export default favoritesReducer;