import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {AlignItemsLayout} from './components/AlignItemsLayout';
import {FlexDirectionBasics} from './components/FlexDirectionBasics';
import {JustifyContentBasics} from './components/JustifyContentBasics';

export default function FlexScreen() {
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1, flex: 1}}
      style={styles.container}>
      <FlexDirectionBasics />
      <JustifyContentBasics />
      <AlignItemsLayout />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
