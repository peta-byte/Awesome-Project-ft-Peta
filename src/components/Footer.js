import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from '../containers/styles/sharedStyles';

export const Footer = () => (
    <View style={styles.footerContainer}>
        <Image style={styles.footerImage} source={require('../images/G.png')} />
        <Text style={styles.sectionDescription}>{''} All rights reserved by Globomantics Tech Conference 2020.</Text>
  </View>
);

