import movies from "../data";

export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";
export const  FAVORITE_MOVIE = " FAVORITE_MOVIE";

export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}

export const addMovie = (obj) => {
    return({type: ADD_MOVIE, payload: obj})
}

export const favoriteMovie = (movieObj) => {
    const movie = movieObj.movies.filter(movie => {
        if(movie.id === movieObj.id) {
            return movie;
        }
    })

    return({type: FAVORITE_MOVIE, payload:movie[0]});
}