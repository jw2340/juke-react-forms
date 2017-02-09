import React from 'react';
import { Link } from 'react-router';
import playlistContainer from '../containers/playlistContainer';

export default class NewPlaylist extends React.Component{


render(){
  return (
  <div>
    <form className="form-group" style={{marginTop: '20px'}} onSubmit={this.props.createPlaylist}>
      <input
        onChange={this.props.handleChange}
        value = {this.props.inputValue}
        className="form-control"
        placeholder="Enter playlist name"
      />
    <button type='submit' disabled={this.props.disabled}>Playlist</button>
    </form>
    {this.props.disabled ? <div className="alert alert-warning">Playlist name must be 1-16 characters</div> : null}
  </div>

  )
}
}
