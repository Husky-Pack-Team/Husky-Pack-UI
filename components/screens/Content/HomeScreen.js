import * as React from 'react';
import { View, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {useState, useEffect} from 'react';
import TaskSlider from '../../Map/TaskSlider';
import AddTaskBox from "../../Map/AddTaskBox";
import * as Location from 'expo-location';

function HomeScreen({ tasks, userName, id}) {

  const [activeIndex, setActiveIndex] = useState(0); 
  const [location, setLocation] = useState({"coords":{
    latitude: 47.6553,
    longitude: -122.3035,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }});
  const [errorMsg, setErrorMsg] = useState(null);
  const [region, setRegion] = useState(
    {
      "latitude": 47.6553,
      "longitude": -122.3035,
      "latitudeDelta": 0.0922,
      "longitudeDelta": 0.0421,
    }
  )
  const [doAddTask, setAddTask] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      console.log(loc);
      setLocation(loc);
    })();
  }, []);


  function toggleAddPost() {
    setAddTask(!doAddTask)
  }

  function goToSliderTask(i) {
    console.log(i)
    setActiveIndex(i)
  }

  async function createTask(title, desc, cost) {
      const response = await fetch('https://huskypackapi.azurewebsites.net//api//task?function=add' +
          '&title=' + title +
          '&description=' + desc +
          '&cost=' + cost +
          '&id=' + id, {
          method: 'POST',
        });

      alert(response);
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity 
        onPress={toggleAddPost}
        style={ [styles.imageContainer, styles.boxWithShadow] }
      >
        <Image source={require('../../../assets/add-icon-2.png')} style={doAddTask ? styles.imageRotated : styles.image} />
      </TouchableOpacity>

      <View key= {200} style={doAddTask ? styles.addTaskBox : styles.hide}>
        <AddTaskBox createNewTask={createTask()}/>
      </View>

      <View key = {2001} style={styles.sliderContainer}>
        <TaskSlider tasks={tasks} region={region} setRegion={setRegion} active={activeIndex} firstItem={activeIndex} enableMomentum={true} userName={userName}/>
      </View>
      <MapView 
        style={styles.map}
        region={region} 
      >
        {tasks.map((marker, index) => (
          <TouchableOpacity 
            key={index}
            onPress={() => goToSliderTask(index)}
          >
            <Marker
              
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
            >
              <Image source={require('../../../assets/marker-icon.png')} style={{height: 35, width:35 }} />
            </Marker>
          </TouchableOpacity>
        ))}
        <Marker
            key={-1}
            coordinate={{"latitude": location.coords.latitude, "longitude": location.coords.longitude}}
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