import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import fetchSongIndex from '../queries/fetchSongIndex';

class SongDetail extends Component{
  render() {
    const { song } = this.props.data;

    if (!song) { return <div>Loading...</div>}

    console.log(this.props);
    return(
      <div>
        <Link to='/'>Back</Link>
        <h3>{song.title}</h3>
      </div>
    );
  }

}

export default graphql(fetchSongIndex, {
  options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail);
