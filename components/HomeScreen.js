import * as React from 'react';
import { View, Text, Button, Dimensions, StyleSheet, Image } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {useState, useEffect} from 'react';

function HomeScreen({ navigation }) {

  // Stores 'tasks' state, an obj representing all tasks around campus
  const [tasks, setTasks] = useState([]);

  // Updates 'tasks' state according to back-end 
  useEffect(() => {
    // This will fire only on mount.
    // TODO: fetch back-end tasks
    // Temporary:
    setTasks([
      {
        "name": "Amit Ferman",
        "title": "Coffee",
        "description": "Need coffee from Microsoft Cafe.",
        "when": "ASAP",
        "price": 7.50,
        "latlng": { "latitude" : 47.653293783515785, "longitude" :  -122.3057501213684}
      },
      {
        "name": "Daniel Berezansky",
        "title": "Food",
        "description": "Need Salmon to feed my bear.",
        "when": "14:00",
        "price": 50.00,
        "latlng": { "latitude" : 47.65525229281891, "longitude" :  -122.30880783957718}
      },
      {
        "name": "Lawrence Qupty",
        "title": "Moving",
        "description": "Need someone to help move my sofa.",
        "when": "18:00",
        "price": 10.00,
        "latlng": { "latitude" : 47.6577888506854, "longitude" :  -122.30641530919283}
      }
    ])
  }, [])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <MapView 
        style={styles.map}
        initialRegion={{
          latitude: 47.6553,
          longitude: -122.3035,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }} 
      >
        {tasks.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}
          >
            <Image source={require('../assets/marker-icon.png')} style={{height: 35, width:35 }} />
          </Marker>
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default HomeScreen;