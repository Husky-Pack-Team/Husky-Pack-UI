import * as React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

function TaskScreen({ tasks, userName}) {
  const styles = StyleSheet.create({
    itemStyle: {
      width: '100%',
      height: 100,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      backgroundColor: 'white',
      borderTopColor: 'black',
      borderWidth: 0.5,
      padding: 10
    },
    textStyle: {
      fontSize: 15
    },
    titleStyle: {
      fontSize: 20,
      color: 'black',
      zIndex: 2,
      marginBottom: 10
    },
    descriptionStyle: {

    },
    descriptionContainer: {
      maxHeight: 50
    }, 
    priceStyle: {
      fontSize: 20,
      color: 'green',
      fontWeight: '400',
      position: 'absolute',
      bottom: 5,
      left: 10
    }
  })

  function _renderItem(item, index) {
    return (
      item.name === userName &&
      <View key={item.id} style={styles.itemStyle}>
        <Text style={styles.titleStyle}>{item.title}</Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionStyle}>{item.description}</Text>
        </View>
        <Text style={styles.priceStyle}>${item.price}</Text>
      </View>
    )
  }

  return (
    <ScrollView>
      {tasks.map((task, index) => _renderItem(task, index))}
    </ScrollView>
  );

  
}

export default TaskScreen;