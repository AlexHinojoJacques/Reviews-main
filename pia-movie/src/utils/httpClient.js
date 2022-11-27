const API = "https://api.themoviedb.org/3";

export function get(path) {
    return fetch(API + path , {
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjFjM2RkZTVkNDMwMzI5ZTk1MDQ1YmJkM2Y1MmQwOSIsInN1YiI6IjYzNWFhYzI4ODdlNjNlMDA4OWFlZDliNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qObdFTczRtXtwQ5ug36CPBDyL40I7dkklgO8tSNy4NU",
            "Content-Type": "application/json;charset=utf-8",
        },
    }).then(result => result.json());
}