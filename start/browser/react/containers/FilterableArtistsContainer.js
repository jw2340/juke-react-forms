import React from 'react';
import Artists from '../components/Artists';
import FilterInput from '../components/FilterInput';

export default class Filterable extends React.Component{
  constructor(){
    super()

    this.state = {inputValue: ''};

    this.handleChange = this.handleChange.bind(this);
    //this.filterArtsits = this.filterArtists.bind(this);

  }

  handleChange(event){
    this.setState({inputValue: event.target.value});
  }

  // filterArtists(){
  //   const artists = this.props.artists;
  //   return artists.filter((artist) => artist.name.includes(this.state.inputValue))
  // }

  render(){
    const artists = this.props.artists;
    const filterArtists = artists.filter((artist) => artist.name.toLowerCase().includes(this.state.inputValue.toLowerCase()));
  // }
    return (
      <div>
        <FilterInput handleChange = {this.handleChange}/>
        <Artists artists={filterArtists} />
      </div>
    )
  }
}
