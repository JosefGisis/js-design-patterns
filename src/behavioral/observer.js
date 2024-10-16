/**
 * The Observer pattern (AKA Publish-Subscribe) create a one-to-many dependency between an object (usually containing data)
 * to facets that utilize the data. When the data changes, the facets (subscribers) are notified and update accordingly.
 *
 * The Observer pattern is similar to the Model - View - Controller architecture in that multiple views can share a single model,
 * but the difference being that the Controller is responsible for notifying the view and not the Model itself.
 *
 * This is also very similar to dependencies in React. React hooks that are provided a dependency are subscribed to changes in
 * the data. React dependencies also suffer from similar pitfalls to the observer pattern; that is, errors can be hard to
 * debug, and changes can cause cascading and unpredictable effects.
 */

const movieReviewData = (function () {
    let movieReviews = []
    const observers = new Map()

    const getMovies = function () {
        return movieReviews
    }

    const addObserver = function (observer) {
        if (observers.has(observer.id)) {
            console.log('looks like this observer has already been added')
            return
        }
        observers.set(observer.id, observer)
    }

    const notifyObservers = function () {
        observers.forEach((observer) => {
            observer.update()
        })
    }

    const setMovieReviews = function (movies) {
        movieReviews = movies
        notifyObservers()
    }

    return {
        getMovies,
        addObserver,
        setMovieReviews,
    }
})()

// You create multiple observers and add them to the movieReviewData object
// This observer displays all the movie reviews
function MovieReviewObserver(id, dependency) {
    this.id = id
    this.dependency = dependency
    this.movieReviews = []

    this.update = function () {
        this.movieReviews = this.dependency?.getMovies() || []
        console.log(' ')
        console.log('Movie Reviews:')
        this.movieReviews.map((review) =>
            console.log(`${review.name}: ${review.rating}`)
        )
    }
}

// This observer displays only the top movies
function TopMoviesObserver(id, dependency) {
    this.id = id
    this.dependency = dependency
    this.movieReviews = []

    this.update = function () {
        this.movieReviews = this.dependency?.getMovies() || []
        console.log(' ')
        console.log('Top Movies:')
        this.movieReviews
            .filter((review) => review.rating > 8)
            .map((review) => console.log(`${review.name}: ${review.rating}`))
    }
}

// This observer displays only the worst movies
function WorstMoviesObserver(id, dependency) {
    this.id = id
    this.dependency = dependency
    this.movieReviews = []

    this.update = function () {
        this.movieReviews = this.dependency?.getMovies() || []
        console.log(' ')
        console.log('Worst Movies:')
        this.movieReviews
            .filter((review) => review.rating < 5)
            .map((review) => console.log(`${review.name}: ${review.rating}`))
    }
}

// Usage

// Movie review data.
const movieReviews = [
    { id: 1, name: 'Django Unchained', rating: 9 },
    { id: 2, name: 'Pulp Fiction', rating: 9 },
    { id: 3, name: 'Kill Bill', rating: 8 },
    { id: 4, name: 'Kill Bill 2', rating: 8 },
    { id: 5, name: 'Jackie Brown', rating: 8 },
    { id: 6, name: 'Inglorious Basterds', rating: 9 },
    { id: 7, name: 'Reservoir Dogs', rating: 7 },
    { id: 8, name: 'The Hateful Eight', rating: 8 },
    { id: 9, name: 'Once Upon a Time in Hollywood', rating: 8 },
    { id: 11, name: 'Death Proof', rating: 4 },
]

// Create the observers
const movieReviewNameObserver = new MovieReviewObserver(1, movieReviewData)
const topMoviesObserver = new TopMoviesObserver(2, movieReviewData)
const worstMoviesObserver = new WorstMoviesObserver(3, movieReviewData)

// Add the observers to the movieReviewData object
movieReviewData.addObserver(movieReviewNameObserver)
movieReviewData.addObserver(topMoviesObserver)
movieReviewData.addObserver(worstMoviesObserver)

movieReviewData.setMovieReviews(movieReviews)
// You can add more movie reviews and the observers will update accordingly
movieReviewData.setMovieReviews([
    ...movieReviews,
    { id: 10, name: 'From Dusk Till Dawn', rating: 3 },
])
