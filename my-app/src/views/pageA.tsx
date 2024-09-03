import MovieList from '../components/MovieList';
import React, { Component } from 'react'

export default class pageA extends Component {

  state = {
    movieList: [],
  };

  async componentDidMount() {
    const response = await fetch('https://hp-api.herokuapp.com/api/characters');
    const data = await response.json();
    this.setState({ movieList: data });
  }

  render() {
    return (
      <div className='p-6'>
        <h1 className='text-base mb-1'>页面A</h1>
        <MovieList data={this.state.movieList} emptyTips='empty comedy' />
      </div>
    )
  }
}

