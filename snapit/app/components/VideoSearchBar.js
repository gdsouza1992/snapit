import React, { Component } from "react";
import { SearchBar } from 'react-native-elements';

class VideoSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  onChangeText(term) {
      this.setState({ term });
      this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <SearchBar
          placeholder='Type Here...'
          value={this.state.term}
          onChangeText={(newTerm) => this.onChangeText(newTerm)}
          />
    );
  }

}

export default VideoSearchBar;
