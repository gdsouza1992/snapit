import React from "react";
import { Image, View, ListView, StyleSheet, Text, TouchableHighlight
 } from 'react-native';
// import { List, ListItem } from 'react-native-elements'
//
// // import VideoListItem from "./video_list_item";
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 20,
//   },
// });
//
// class VideoList extends React.Component {
//     constructor(props){
//         super(props);
//     }
//
//     renderRow (item) {
//     return (
//             <ListItem
//                 key={item.id.videoId}
//                 title={item.etag}
//             />
//         )
//     }
//
//     render () {
//         return (
//             <List style={{flex: 1}}>
//                 <ListView
//                     renderRow={(item) => this.renderRow(item)}
//                     dataSource={this.props.videos}
//                 />
//             </List>
//         )
//     }
// };
//
// export default VideoList;



import { List, ListItem } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  style_row_view: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#FFFFFF',
  },
  style_text: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#333333',
    alignSelf: 'center',
  },

});

class VideoList extends React.Component {
    constructor(props){
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    }

    _renderRow(rowData, sectionID, rowID) {
        console.log('render row ...');
        return (
            <TouchableHighlight onPress={this._onPressRow.bind(this.rowID, rowData)}>
                <View style={styles.style_row_view}>
                    <Image
                        style={{width: 50, height: 50}}
                        source={{uri: rowData.snippet.thumbnails.default.url}}
                    />
                    <Text style={styles.style_text}>{rowData.snippet.title}</Text>
                </View>
            </TouchableHighlight>
        );
    }

    _onPressRow(rowID, rowData) {
        console.log(rowID, rowData);
    }

    render () {
        const dataSource = this.ds.cloneWithRows(this.props.videos);
        console.log(dataSource);
        return (
            <List>
                <ListView
                dataSource={dataSource}
                renderRow = {this._renderRow.bind(this)}
                />
            </List>
        )
    }
}

export default VideoList
