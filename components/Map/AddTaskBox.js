import * as React from 'react';
import {Keyboard, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import { Input } from 'react-native-elements';
import {useState} from "react";
import CurrencyInput from "react-native-currency-input/src/CurrencyInput";

function AddTaskBox({createNewTask}) {

    // Task description
    const [desc, setDesc] = useState("");
    // Task Title
    const [title, setTitle] = useState("");
    // Task cost
    const [cost, setCost] = useState(5);


    function createTask(target) {

    }

    return (
        <View style={styles.itemStyle}>
            <Input
                labelStyle={styles.headerText}
                inputStyle={styles.verifiedText}
                value={title}
                label={"Task Title"}
                leftIcon={{ type: 'font-awesome', name: 'bell' }}
                onChangeText={value => setTitle(value)}
            />
            <Input
                labelStyle={styles.headerText}
                inputStyle={styles.verifiedText}
                value={desc}
                label={"Task Description"}
                leftIcon={{ type: 'font-awesome', name: 'pencil' }}
                onChangeText={value => setDesc(value)}
            />

            <CurrencyInput
                style={styles.costStyle}
                value={cost}
                onChangeValue={value => setCost(value)}
                prefix="$"
                delimiter=","
                separator="."
                precision={2}
                maxValue={1000}
                mimValue={0}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    costStyle: {
        borderColor: "gray",
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        fontSize: 16,
        fontWeight: '200'

    }, itemStyle: {
        backgroundColor:'white',
        borderRadius: 5,
        height: '90%',
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
        fontSize: 16,
        fontWeight: '200',
        color: "#4b2e83"
    },
    image: {
        height: 30,
        width: 30,
        borderRadius: 64,
        marginLeft: 10
    },
    titleStyle: {
        fontSize: 25,
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
        fontSize: 30,
        color: 'green',
        fontWeight: '400',
        position: 'absolute',
        bottom: 5,
        padding: 20
    },
    boxWithShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 5
    }
})

export default AddTaskBox;
