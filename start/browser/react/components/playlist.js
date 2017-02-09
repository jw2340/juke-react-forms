import React from 'react';
import Songs from './Songs';

const Playlist = props => {
  console.log('props=======', props);
  props.selectPlaylist(props.routeParams.playlistId);


  const playlist = props.selectedPlaylist;
  return (<div>
    <h3>{ playlist.name }</h3>
    <Songs songs={playlist.songs} /> {/** Hooray for reusability! */}
    { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
    <hr />
  </div>
  );
}

export default Playlist
