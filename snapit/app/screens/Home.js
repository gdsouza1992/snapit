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
    static navigationOptions = {
        title: 'Youtube video player',
    };

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

    videoSelected(data) {
        console.log(data);
        const { navigate } = this.props.navigation;
        navigate('Movie', { videoData : data })
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
                    videoSelected={this.videoSelected.bind(this)}
                    videos={this.state.videos}
                />
            </View>
        );
    }
}
