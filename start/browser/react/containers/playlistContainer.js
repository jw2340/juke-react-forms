import React from 'react';
import NewPlaylist from '../components/NewPlaylist';
import AppContainer from './AppContainer';
import axios from 'axios';

export default class PlaylistContainer extends React.Component{
  constructor(){
    super()

    this.state = {inputValue: '',
                  disabled: true};

    this.handleChange = this.handleChange.bind(this);
    this.alterInput = this.alterInput.bind(this);
    this.createPlaylist = this.createPlaylist.bind(this);
  }

  handleChange(event){

    this.setState({inputValue: event.target.value});

    if (event.target.value.length <= 16 && event.target.value.length > 0){
      this.setState({disabled: false});
    }
    else {
      this.setState({disabled: true});
    }
  }

  alterInput(){
    this.setState({inputValue: '',
                   disabled: true});
    console.log(this.state.inputValue);
  }

  createPlaylist(event){
    console.log(this.props);
    event.preventDefault();
    this.props.addPlaylist(this.state.inputValue);
    this.alterInput();

  }

  render(){
    return (
      <div>
        <NewPlaylist handleChange={this.handleChange}
                     createPlaylist={this.createPlaylist}
                     inputValue={this.state.inputValue}
                     disabled = {this.state.disabled} />
      </div>
    )
  }

}
