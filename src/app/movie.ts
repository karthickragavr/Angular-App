
export class Movie {
    Title: String;
    Year: String;
    Rated: String;
    Released: String;
    Runtime: String;
    Genre: String;
    Director: String;
    Writer: String;
    Actors: String;
    Plot: String;
    Language: String;
    Country: String;
    Awards: String;
    Poster: String;
    Ratings: Rating[];
    Metascore: String;
    imdbRating: String;
    imdbVotes: String;
    imdbID: String;
    Type: String;
    DVD: String;
    BoxOffice: String;
    Production: String;
    Website: String;
    Response: String;
}
export  interface Rating {
    source: string;
    value: string;
}
