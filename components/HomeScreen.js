import * as React from 'react';
import { View, Text, Button, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {useState, useEffect} from 'react';
import TaskSlider from './Map/TaskSlider'
import AddTaskBox from "./Map/AddTaskBox";

function HomeScreen({ navigation }) {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [region, setRegion] = useState(
    {
      latitude: 47.6553,
      longitude: -122.3035,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
  )
  // Stores 'tasks' state, an obj representing all tasks around campus
  const [tasks, setTasks] = useState([]);

  const [doAddTask, setAddTask] = useState(false);

  // This will fire only on mount. 
  // Updates 'tasks' state according to database.
  useEffect(() => {
    // 
    // TODO: fetch back-end tasks on timer
    // Temporary:
    setTasks([
      {
        "name": "Amit Ferman",
        "title": "Coffee",
        "description": "Need coffee from Microsoft Cafe.",
        "when": "ASAP",
        "price": 7.50,
        "verified": true,
        "latlng": { "latitude" : 47.653293783515785, "longitude" :  -122.3057501213684}
      },
      {
        "name": "Daniel Berezansky",
        "title": "Food",
        "description": "Need Salmon to feed my bear.",
        "when": "14:00",
        "price": 50.00,
        "verified": true,
        "latlng": { "latitude" : 47.65525229281891, "longitude" :  -122.30880783957718}
      },
      {
        "name": "Lawrence Qupty",
        "title": "Moving",
        "description": "Need someone to help move my sofa.",
        "when": "18:00",
        "price": 10.00,
        "verified": false,
        "latlng": { "latitude" : 47.6577888506854, "longitude" :  -122.30641530919283}
      }
    ])
  }, [])





  function toggleAddPost() {
    setAddTask(!doAddTask);
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity 
        onPress={toggleAddPost}
        style={ [styles.imageContainer, styles.boxWithShadow] }
      >
        <Image source={require('../assets/add-icon-2.png')} style={doAddTask ? styles.imageRotated : styles.image} />
      </TouchableOpacity>

      <View style={doAddTask ? styles.addTaskBox : styles.hide}>
        <AddTaskBox/>
      </View>

      <View style={styles.sliderContainer}>
        <TaskSlider tasks={tasks} region={region} setRegion={setRegion}/>
      </View>
      <MapView 
        style={styles.map}
        region={region} 
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
  }, addTaskBox: {
    width: '90%',
    height: '50%',
    position: 'absolute',
    bottom: '35%',
    zIndex: 100,
    flex: 1,
    justifyContent: 'center',
  }, hide: {
    display: 'none'
  }, imageRotated: {
    height: 30,
    width: 30,
    borderRadius: 64,
    transform: [{rotate: '45 deg'}]
  }

});

export default HomeScreen;