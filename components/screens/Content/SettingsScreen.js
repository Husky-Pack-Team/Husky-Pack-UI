import * as React from 'react';
import {Text, View, Image, StyleSheet, ImageBackground} from 'react-native';
import { Input } from 'react-native-elements';


function SettingsScreen({name, setName, field, setField, interests, setInterests}) {

    function updateName(target) {
        setName(target);
        console.log(target);
    }

    const styles = StyleSheet.create({
      image: {
        height: 100,
        width: 100,
        borderRadius: 64,
        marginLeft: 10
      },
      title: {
        fontStyle: 'italic',
        margin: 10
      },
      bg: {
        width: '100%',
        height: '100%',
        flex: 1
      },
      settings: { 
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'flex-start', 
        backgroundColor: 'white', 
        width: '100%',
      },
      picBg: {
        width: 120,
        height: 120,
        borderRadius: 64,
        marginTop: -70,
        paddingTop: 5,
        backgroundColor: 'white'
      },
      inputCont: {
        width: '80%',
        fontFamily: 'monospace',
        height: '70%'
      }
    })

    //TODO Show Profile Details, Add Photo, Verification, Add Affiliations, Major, more profile details, etc.
  return (
    
      <View style={styles.settings} fadingEdgeLength={100}>
          <Image source={require('../../../assets/cherries.jpg')} resizeMode="cover" style={styles.bg}/>
          <View style={styles.picBg} >
            <Image source={require('../../assets/husky-logo.png')} style={styles.image} />
          </View>
          <View style={styles.inputCont}>
            <Input
                value={name}
                label={"Name"}
                rightIcon={{ type: 'entypo', name: 'user' }}
                onChangeText={value => setName(value)}
                style={{fontFamily: 'monospace'}}
            />
            <Input
                value={field}
                label={"Area of Study"}
                rightIcon={{ type: 'entypo', name: 'feather' }}
                onChangeText={value => setField(value)}
            />
            <Input
                value={interests}
                label={"Interests"}
                rightIcon={{ type: 'entypo', name: 'key' }}
                onChangeText={value => setInterests(value)}
            />
          </View>
      </View>
  );
}

export default SettingsScreen;
