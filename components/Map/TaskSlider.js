import * as React from 'react';
import {useState} from 'react';
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

function TaskSlider({ tasks }) {

  const [activeIndex, setIndex] = useState(0);

  var demoData = {
      carouselItems: [
      {
          title:"Item 1",
          text: "Text 1",
      },
      {
          title:"Item 2",
          text: "Text 2",
      },
      {
          title:"Item 3",
          text: "Text 3",
      },
      {
          title:"Item 4",
          text: "Text 4",
      },
      {
          title:"Item 5",
          text: "Text 5",
      }
    ]
  }

  function _renderItem(data, index){
    const task = data.item;
    return (
      <View style={[styles.itemStyle, styles.boxWithShadow]}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{task.name}</Text>
          {task.verified && <View style={styles.verifiedContainer}>
            <Text style={styles.verifiedText}>Verified Student</Text>
            <Image source={require('../../assets/verified-icon.png')} style={styles.image} />
          </View>}
        </View>
        <Text style={styles.textStyle}>{task.title}</Text>
        <Text>{task.description}</Text>
      </View>
    )
  }

  const styles = StyleSheet.create({
    itemStyle: {
      backgroundColor:'floralwhite',
      borderRadius: 5,
      height: 200,
      padding: 20,
      marginLeft: 25,
      marginRight: 25,
      zIndex: 1
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      marginBottom: 10,
      fontFamily: 'Roboto'
    },
    headerText: {
      fontSize: 15,
      fontWeight: '500'
    },
    verifiedContainer: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    verifiedText: {
      fontSize: 15,
      fontWeight: '200',
      color: "#4b2e83"
    }
    ,image: {
      height: 30,
      width: 30,
      borderRadius: 64,
      marginLeft: 10
    },
    textStyle: {
      fontSize: 30,
      color: 'black',
      zIndex: 2
    },
    boxWithShadow: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 1,  
      elevation: 5
    }
  })

  return (
    <Carousel
      layout={"default"}
      data={tasks}
      sliderWidth={Dimensions.get('window').width}
      itemWidth={425}
      sliderHeight={200}
      renderItem={_renderItem}
      onSnapToItem = { index => setIndex(index) } 
    />
  )
}

export default TaskSlider;