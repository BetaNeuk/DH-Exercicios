const requests = require('./requests')

module.exports = {
  async getMoviesByRate () {
    const ratedMovies = await requests.getMoviesByRate()
    return ratedMovies.sort((previous, next) => {
      // const previousRating = parseFloat(previous.rating);
      // const nextRating = parseFloat(next.rating);

      // if (previous.rating > next.rating)  return -1
      // if (previous.rating < next.rating)  return 1
      // return 0

      // return nextRating - previousRating
      return +next.rating - +previous.rating
    })
  }
}