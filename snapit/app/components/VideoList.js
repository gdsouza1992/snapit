import React from "react";
import { View, ListView, StyleSheet, Text } from 'react-native';
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
  textComponent: {
      fontSize: 24
  }

});

class VideoList extends React.Component {
    constructor(props){
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    }

    render () {
        const dataSource = this.ds.cloneWithRows(this.props.videos);

      return (
        <List>
          <ListView
            dataSource={dataSource}
            renderRow={(rowData) => <Text style={styles.textComponent}> {rowData.etag} </Text>}
          />
        </List>
      )
    }
}

export default VideoList
