import React, { Component } from 'react';
import 'isomorphic-fetch';
import Review from './MovieReviews'
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends React.Component{
  constructor(){
    super();
    this.state = {
      reviews: []
    }
  }

  componentWillMount(){
    fetch(URL)
      .then(resp => resp.json())
      .then(resp => resp.results)
      .then(results => this.setState({'reviews': results}));
  }

  render(){
    return (
      <div className = "latest-movie-reviews">
        <h3>All Recent Reviews</h3>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer;
