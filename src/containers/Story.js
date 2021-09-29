import React from 'react';
import {ScrollView, View, Text, Image, Pressable} from 'react-native';

import styles from './styles/sharedStyles.js';

function Story() {
  return (
    <ScrollView
      ref={(a) => (this.scroll = a)}
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.storyInnerContainer}
      stickyHeaderIndices={[0, 1]}
      indicatorStyle="white"
      pagingEnabled={true}
      scrollEnabled={true}
      style={styles.storyContainer}>
      <Image
        style={styles.storyImageSmall}
        source={require('../images/shutterstock_211091626.png')}
      />
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitleStory}>Our Story</Text>
          <Text style={styles.sectionDescriptionStory}>
            Conference for nerds by nerds!
          </Text>
        </View>
      </View>
      <View>
        <Pressable onPress={() => this.scroll.scrollToEnd({animated: true})}>
          <Text style={styles.sectionDescriptionStory}>Go To End</Text>
        </Pressable>
        <Text style={styles.sectionDescriptionStory}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text style={styles.sectionDescriptionStory}>
          Egestas diam in arcu cursus. Viverra nibh cras pulvinar mattis nunc sed blandit. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Mauris augue neque gravida in. Sodales neque sodales ut etiam sit amet nisl purus in. Libero enim sed faucibus turpis in eu mi. Et tortor consequat id porta nibh venenatis cras. Neque ornare aenean euismod elementum nisi quis eleifend. Vitae justo eget magna fermentum iaculis eu non diam. Bibendum arcu vitae elementum curabitur.
        </Text>
        <Text style={styles.sectionDescriptionStory}>End of the story!</Text>
        <Pressable onPress={() => this.scroll.scrollTo({x: 0, y: 0, animated: true})}>
          <Text style={styles.sectionDescriptionStory}>Go To Top</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

export default Story;
