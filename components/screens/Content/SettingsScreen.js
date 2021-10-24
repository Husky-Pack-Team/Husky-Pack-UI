import * as React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
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
      }
    })

    //TODO Show Profile Details, Add Photo, Verification, Add Affiliations, Major, more profile details, etc.
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', padding: 20}}>
        <Image source={require('../../../assets/husky-icon.jpg')} style={styles.image} />
        <Text style={styles.title}>Boundless Husky</Text>
        <Input
            value={name}
            label={"Name"}
            leftIcon={{ type: 'font-awesome', name: 'pencil' }}
            onChangeText={value => setName(value)}
        />
        <Input
            value={field}
            label={"Area of Study"}
            leftIcon={{ type: 'font-awesome', name: 'pencil' }}
            onChangeText={value => setField(value)}
        />
        <Input
            value={interests}
            label={"Interests"}
            leftIcon={{ type: 'font-awesome', name: 'pencil' }}
            onChangeText={value => setInterests(value)}
        />
    </View>
  );
}

export default SettingsScreen;
