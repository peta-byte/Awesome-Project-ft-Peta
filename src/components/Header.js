import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../containers/styles/sharedStyles';

export const Header = (props) => (
    <View style={styles.sectionContainer}>
        <Image style={styles.headerImage} source={props.image} />
        <Text style={styles.sectionDescription}>{props.heading}</Text>
    </View>
);
