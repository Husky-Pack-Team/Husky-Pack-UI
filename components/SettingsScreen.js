import * as React from 'react';
import {View} from 'react-native';
import { Input } from 'react-native-elements';

function SettingsScreen({name, setName}) {

    function updateName(target) {
        setName(target);
        console.log(target);
    }

    //TODO Show Profile Details, Add Photo, Verification, Add Affiliations, Major, more profile details, etc.
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Input
            value={name}
            label={"Change Name"}
            leftIcon={{ type: 'font-awesome', name: 'pencil' }}
            onChangeText={value => setName(value)}
        />
    </View>
  );
}

export default SettingsScreen;
