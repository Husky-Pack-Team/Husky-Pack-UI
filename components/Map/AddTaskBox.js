import * as React from 'react';
import {View} from 'react-native';
import { Input } from 'react-native-elements';
import {useState} from "react";

function AddTaskBox({createNewTask}) {

    // Task description
    const [desc, setDesc] = useState("");
    // Task Title
    const [title, setTitle] = useState("");
    // Task cost
    const [cost, setCost] = useState(5);


    function createTask(target) {

    }

    //TODO Show Profile Details, Add Photo, Verification, Add Affiliations, Major, more profile details, etc.
    return (
        <View style={{backgroundColor: 'red', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Input
                value={title}
                label={"Task Title"}
                leftIcon={{ type: 'font-awesome', name: 'pencil' }}
                onChangeText={value => setTitle(value)}
            />
        </View>
    );
}

export default AddTaskBox;
