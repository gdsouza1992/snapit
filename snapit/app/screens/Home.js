import _ from 'lodash';
import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

import VideoSearchBar from '../components/VideoSearchBar';
import VideoList from '../components/VideoList';
// import { VideoDetail } from '../components/VideoDetail';

import YTSearch from "youtube-api-search";

const API_KEY = "AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss";


export default class HomeScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch("surfboards");
      }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, videos => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce(term => {
            this.videoSearch(term);
        }, 300);

        const { navigate } = this.props.navigation;
        return (
            <View>
                <VideoSearchBar onSearchTermChange={videoSearch} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos}
                />
            </View>
        );
    }
}
