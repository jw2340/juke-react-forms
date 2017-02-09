import React from 'react';
import Artists from '../components/Artists';
import FilterInput from '../components/FilterInput';

export default class Filterable extends React.Component{
  constructor(){
    super()

    this.state = {inputValue: ''};

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event){
    this.setState({inputValue: event.target.value});
  }


  render(){
    const artists = this.props.artists;
    const filterArtists = artists.filter((artist) => artist.name.toLowerCase().includes(this.state.inputValue.toLowerCase()));
    return (
      <div>
        <FilterInput handleChange = {this.handleChange}/>
        <Artists artists={filterArtists} />
      </div>
    )
  }
}
