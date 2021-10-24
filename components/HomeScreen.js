import * as React from 'react';
import { View, Text, Button, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {useState, useEffect} from 'react';
import TaskSlider from './Map/TaskSlider';
import * as Location from 'expo-location';

function HomeScreen({ tasks }) {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location);
    })();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity 
        onPress={createPost}
        style={ [styles.imageContainer, styles.boxWithShadow] }
      >
        <Image source={require('../assets/add-icon-2.png')} style={styles.image} />
      </TouchableOpacity> 
      <View style={styles.sliderContainer}>
        <TaskSlider tasks={tasks}/>
      </View>
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
            title={"Task: " + marker.title}
            description={marker.description}
          >
            <Image source={require('../assets/marker-icon.png')} style={{height: 35, width:35 }} />
          </Marker>
        ))}
          <Marker
            key={-1}
            coordinate={{ "latitude" : location ? location.coords.latitude : 0, "longitude" :  location ? location.coords.longitude : 0}}
            title={"Your Location"}
          />
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
  imageContainer: {
    height:60,
    width: 60,
    borderRadius: 64,
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'white',
    zIndex: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 30,
    width: 30,
    borderRadius: 64
  },
  boxWithShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,  
    elevation: 5
  }, sliderContainer: {
    width: '100%',
    height: '30%',
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

});

// Creates new post
//  - directs user to new post form
//  - posts new task to database
//  - after submission, returns user to home map
function createPost() {
  alert("TBC")
}

export default HomeScreen;