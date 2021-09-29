import React, {useState} from 'react';
import {View, FlatList, Text, TextInput, Pressable, Image} from 'react-native';
import { speakers } from '../data/speakers.json';
import styles from '../containers/styles/sharedStyles';
import {Footer} from '../components/Footer';
import {Header} from '../components/Header';

const Speakers = () => {
  const [filteredSpeakers, setFilteredSpeakers] = useState(speakers);

  const getSearchText = (text) => {
    const filteredSpeakersList = speakers.filter(value =>
      value.sessions[0].name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredSpeakers(filteredSpeakersList);
  };

  return (
    <View>
      <SearchSessions getSearchText={getSearchText} />
      <FlatList
      keyboardDismissMode={'on-drag'}
      keyboardShouldPersistTaps={'always'}
      data={filteredSpeakers}
      renderItem={renderItem}
      ItemSeparatorComponent={SeparatorComponent}
      pagingEnabled={false}
      ListHeaderComponent={HeaderComponent}
      ListFooterComponent={FooterComponent}
      keyExtractor={item => item.id} />
    </View>
  );
};

const SearchSessions = (props) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
    props.getSearchText(text);
  };

  const clearSearch = () => {
    this.textInput.clear();
    handleSearch('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        ref={(ref) => (this.textInput = ref)}
        value={searchText}
        onChangeText={(text) => handleSearch(text)}
        style={styles.searchInput}
        placeholder={'Search Sessions'}
        returnKeyType={'go'}
        autoCorrect={false}
        autoFocus={false}
        keyboardType={'default'}
        multiline={false}
        selectionColor={'green'}
       />
       <Pressable onPress={clearSearch} style={styles.clearContainer}>
         <Image style={styles.clearImage} source={require('../images/multiply-1_Orange.png')} />
       </Pressable>
    </View>
  );
};

const renderItem = ({item, index}) => (
  <View>
    <Speaker id={index} name={item.name} bio={item.bio} session={item.sessions[0].name} />
  </View>
);

const Speaker = ({id, name, bio, session}) => {
  return (
    <View style={styles.sectionContainer} key={id}>
      <Text style={styles.sectionTitle}>Speaker Name: {name}</Text>
      <Text style={styles.sectionDescription}>Bio: {bio}</Text>
      <Text style={styles.sectionDescriptionBold}>Session: {session}</Text>
    </View>
  );
};

const SeparatorComponent = () => (
  <View style={styles.separatorStyle} />
);

const HeaderComponent = () => (
  <Header image={require('../images/girl.png')} heading={'Awesome Speakers Lineup!'} />
);

const FooterComponent = () => (
  <Footer />
);

export default Speakers;
