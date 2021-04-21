import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
   

    state = {
        reviews: [],
        searchTerm: ""
    }
    
    handleSearchInputChange = event => {
        this.setState({ searchTerm: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
        fetch(URL.concat(this.state.searchTerm))
        .then(res => res.json())
        .then(movieData => {
            this.setState({ reviews: movieData.results })
        })
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <label>Search Movie</label>
                    <input type="text" onChange={this.handleSearchInputChange}></input>
                    <button>Submit</button>
                </form>
                
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        );
    }
}

export default SearchableMovieReviewsContainer;
