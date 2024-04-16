"use strict";

function workWithMovies (event){
    const movies = [
        'Snatch',
        'Lock Stock',
        'Fight Club',
        ];
        
        movies[3] = 'Zoolander';
        console.log(movies);
        
        movies[3] = 'Grease';
        console.log(movies);
}

workWithMovies();