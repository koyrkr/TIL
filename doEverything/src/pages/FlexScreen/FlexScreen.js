import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {FlexDirectionBasics} from './components/FlexDirectionBasics';
import {JustifyContentBasics} from './components/JustifyContentBasics';

export default function FlexScreen() {
  return (
    <ScrollView style={styles.pageWrapper}>
      <View style={styles.pageSection}>
        <FlexDirectionBasics />
        <JustifyContentBasics />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pageWrapper: {
    width: '100%',
  },
  pageSection: {
    width: '100%',
    height: '100%',
  },
});
