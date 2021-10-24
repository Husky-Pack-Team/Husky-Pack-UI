import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import {useEffect, useState} from "react";

function TaskScreen({ tasks, userName}) {
  const styles = StyleSheet.create({
    itemStyle: {
      width: '90%',
      height: 120,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      backgroundColor: 'white',
      
      padding: 10,
      borderRadius: 10
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
      fontWeight: '400'
      
    }, 
    footer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      width: '100%'
    },
    dltBtn: {
      margin: 0
    },
    contentContainer: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: 20,
      flexGrow: 1
    }
  })

  // null if nothing to delete, the code of the task to delete otherwise
  const [toDeleteCode, setDeleteCode] = useState(null);

  useEffect(() => {
    if(toDeleteCode !== null) {
      deleteTask(toDeleteCode).then(console.log("Deleted!"));
    }
    setDeleteCode(null);

  })

  async function deleteTask(code) {
    alert("here")
    const response = await fetch('https://huskypackapi.azurewebsites.net/api/task?function=remove' +
        '&code='+ code,{
      method: 'POST'
    });

    // alert(code);
    console.log(JSON.stringify(response));

  }

  function _renderItem(item, index) {
    return (
      item.name === userName &&
      <View key={item.id} style={styles.itemStyle}>
        <Text style={styles.titleStyle}>{item.title}</Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionStyle}>{item.description}</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.priceStyle}>${item.price}</Text>
          <Button title = "Delete" color="red" onPress={() => deleteTask(item.id)}/>
        </View>
      </View>
    )
  }

  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {tasks.map((task, index) => _renderItem(task, index))}
      </ScrollView>
    </View>
  );

  
}

export default TaskScreen;