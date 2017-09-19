import React, { Component } from 'react';
import YouTube, { YouTubeStandaloneIOS, YouTubeStandaloneAndroid } from 'react-native-youtube';
import {
  Text,
  View,
  Image,
  PixelRatio,
  StyleSheet,
  Platform,
  TouchableOpacity
} from 'react-native';
const API_KEY = "AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss";
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  button: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'blue',
  },
  buttonTextSmall: {
    fontSize: 15,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  player: {
    alignSelf: 'stretch',
    marginVertical: 10,
  },
});


export default class MovieScreen extends Component {

    static navigationOptions = {
        title: 'Detail View',
    };

    constructor(props){
        super(props);
        this.state = {
            video: this.props.videoData
        }
    }

    throwError = (e) => {
        console.log(e);
    }

    render() {
        const videoData = this.props.navigation.state.params.videoData;
        return (
          <View>
          <YouTube
                apiKey="AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss"
                videoId="KVZ-P-ZI6W4" // The YouTube video ID
                play={true}           // control playback of video with true/false
                hidden={false}        // control visiblity of the entire view
                fullScreen={true}    // control whether the video should play inline

                onReady={(e)=>{this.setState({isReady: true})}}
                onChangeState={(e)=>{this.setState({status: e.state})}}
                onChangeQuality={(e)=>{this.setState({quality: e.quality})}}
                onError={(e)=>{this.setState({error: e.error})}}

                style={{alignSelf: 'stretch', height: 300, backgroundColor: 'black', marginVertical: 10}}
                />
              <Text>{videoData.snippet.title}</Text>
              <Text>{videoData.id.videoId}</Text>
              <Text>{videoData.snippet.channelTitle}</Text>
              <Text>{videoData.snippet.description}</Text>
          </View>
      );
    }
}
