import React, {useState} from 'react';
import {Text, SectionList, View} from 'react-native';
import {sessions} from '../data/sessions.json';
import styles from '../containers/styles/sharedStyles';
import {Footer} from '../components/Footer';
import {Header} from '../components/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Sessions = () => {
  return (
    <View>
      <SectionList
      sections={sessions}
      renderSectionHeader={renderSectionHeader}
      keyExtractor={({item, index}) => index}
      stickySectionHeadersEnabled={true}
      SectionSeparatorComponent={SeparatorComponent}
      ListHeaderComponent={HeaderComponent}
      ListFooterComponent={FooterComponent}
      renderItem={renderItem} />
    </View>
  );
};

const renderItem = ({item, index}) => {
  return (
    <View>
      <SessionsList
      id={index}
      name={item.title}
      desc={item.description}
      level={item.level}
      room={item.room}
      speaker={item.speakers[0].name} />
    </View>
  );
};

const renderSectionHeader = ({section}) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerTitle}>{section.title}</Text>
  </View>
);

const SessionsList = (props) => {
  const [moreInfo, setMoreInfo] =  useState(false);

  return (
    <View key={props.id} style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Session: {props.name}</Text>
      <Text style={styles.sectionDescription}>Speaker: {props.speaker}</Text>
      <TouchableOpacity onPress={() => setMoreInfo(!moreInfo)}>
        <Text style={styles.clickableText}>{moreInfo ? 'Hide' : 'Show More'} Details</Text>
      </TouchableOpacity>
      {moreInfo &&
      (<>
      <Text style={styles.sectionDescription}>Details: {props.desc}</Text>
      <Text style={styles.sectionDescription}>Level: {props.level}</Text>
      <Text style={styles.sectionDescription}>Room: {props.room}</Text>
      </>)
      }
    </View>
  );
};

const SeparatorComponent = () => (
  <View style={styles.separatorStyle} />
);

const HeaderComponent = () => (
  <Header image={require('../images/sec2.jpg')} heading={'Awesome Sessions!'}  />
);

const FooterComponent = () => (
  <Footer />
);

export default Sessions;
