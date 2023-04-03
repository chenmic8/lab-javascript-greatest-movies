// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return (newArray = moviesArray.map((movie) => {
    return movie.director;
  }));
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let newArray = moviesArray.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  return newArray.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  let averageScore =
    moviesArray.reduce((cumulativeScore, currentMovie) => {
      if (!currentMovie.score) {
        return cumulativeScore + 0;
      }
      return cumulativeScore + currentMovie.score;
    }, 0) / moviesArray.length;

  return Number(averageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let newArray = moviesArray.filter((movie) => {
    return movie.genre.includes("Drama");
  });
  return scoresAverage(newArray);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let newArray = [...moviesArray];
  newArray.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });

  return newArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let newArray = [...moviesArray];
  newArray.sort(function (a, b) {
    return a.title.localeCompare(b.title);
  });
  newArray = newArray.slice(0, 20);
  newArray = newArray.map((movie) => {
    return movie.title;
  });
  return newArray;
}

//BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  //let newArray = JSON.parse(JSON.stringify(moviesArray)); //DEEP COPY OF moviesArray
  let newArray = [...moviesArray];
  return newArray.map((movie) => {
    let duration;
    if (!movie.duration.includes("h")) {
      console.log("movie has no hours");
      duration = Number(movie.duration.replace("min", ""));
      return { ...movie, duration: duration };
    } else if (!movie.duration.includes("min")) {
      console.log("movie has no minutes");
      duration = Number(movie.duration.replace("h", "")) * 60;
      return { ...movie, duration: duration };
    }
    duration = movie.duration.replace("h", "").replace("min", "").split(" ");
    let newDuration = Number(duration[0]) * 60 + Number(duration[1]);
    return { ...movie, duration: newDuration };
  });
}

// turnHoursToMinutes(movies).forEach((e) => {
//   console.log(e);
// });
// console.log("\n\n\nOLD ARRAY:");
// movies.forEach((e) => {
//   console.log(e);
// });

movies = [
  {
    title: 'Singin" in the Rain',
    year: 1952,
    director: "Stanley Donen",
    duration: "1h 43min",
    genre: ["Comedy", "Musical", "Romance"],
    score: 8.3,
  },
  {
    title: "Toy Story 3",
    year: 2010,
    director: "Lee Unkrich",
    duration: "2h 5min",
    genre: ["Animation", "Adventure", "Comedy", "Family", "Fantasy"],
    score: 8.3,
  },
  {
    title: "Rashômon",
    year: 1950,
    director: "Akira Kurosawa",
    duration: "128min",
    genre: ["Crime", "Drama", "Mystery"],
    score: 8.3,
  },
  {
    title: "The Wolf of Wall Street",
    year: 2013,
    director: "Martin Scorsese",
    duration: "3h",
    genre: ["Biography", "Comedy", "Crime", "Drama"],
    score: 8.2,
  },
  {
    title: "Yôjinbô",
    year: 1950,
    director: "Akira Kurosawa",
    duration: "1h 50min",
    genre: ["Action", "Drama", "Thriller"],
    score: 8.3,
  },
];
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  let averageScore =
    moviesArray.reduce((cumulativeScore, currentMovie) => {
      if (!currentMovie.score) {
        return cumulativeScore + 0;
      }
      return cumulativeScore + currentMovie.score;
    }, 0) / moviesArray.length;

  return Number(averageScore.toFixed(2));
}
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  let moviesByYears = {};
  let largestScoreYearAndAverageScore;
  if (moviesArray.length === 0) {
    return null;
  }
  moviesArray.forEach((movie) => {
    let movieYear = `${movie.year}`;
    if (!Object.keys(moviesByYears).includes(movieYear)) {
      moviesByYears[movieYear] = [];
    }
    moviesByYears[movieYear].push(movie);
  });

  Object.keys(moviesByYears).forEach((key) => {
    moviesByYears[key] = scoresAverage(moviesByYears[key]);
    if (
      !largestScoreYearAndAverageScore ||
      moviesByYears[key] > largestScoreYearAndAverageScore[1]
    ) {
      largestScoreYearAndAverageScore = [key, moviesByYears[key]];
    }
  });
  console.log(moviesByYears);
  console.log(largestScoreYearAndAverageScore);

  return `The best year was ${largestScoreYearAndAverageScore[0]} with an average score of ${largestScoreYearAndAverageScore[1]}`;
}

// function bestYearAvg(moviesArray) {
//   if (!moviesArray.length) return null;
//   let yearly = {};
//   moviesArray.forEach((curr) => {
//     if (!yearly[curr.year]) yearly[curr.year] = [];
//     //yearly[curr.year].push(curr.score);
//   });
//   return yearly;
// }
console.log(bestYearAvg(movies));
