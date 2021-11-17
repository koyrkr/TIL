import * as React from 'react';
import {Text, View} from 'react-native';

export default function FlexScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Flex Screen</Text>
    </View>
  );
}
