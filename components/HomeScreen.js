import * as React from 'react';
import { View, Text, Button } from 'react-native';
import MapView from 'react-native-maps';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go To Tasks"
        onPress={() => navigation.navigate('Tasks')}
      />
    </View>
  );
}

export default HomeScreen;