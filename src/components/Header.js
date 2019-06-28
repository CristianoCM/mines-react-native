import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Flag from './Flag';
import params from '../params';

export default props => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Mines</Text>
                <Text style={styles.gridSizeTxt}>Grid Size: {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
            </View>
            <View>
                <View style={styles.flagContainer}>
                    <TouchableOpacity style={styles.flagButton}
                        onPress={props.onFlagPressed}
                    >
                        <Flag bigger></Flag>
                    </TouchableOpacity>
                    <Text style={styles.flagsLeft}>= {props.flagsLeft} | </Text>
                    <TouchableOpacity style={styles.flagButton}
                        onPress={props.onFlagPressed}
                    >
                        <Text>Difficulty</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button} 
                    onPress={props.onNewGame}>
                    <Text style={styles.buttonLabel}>New Game</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 0,
        paddingHorizontal: 20,
    },
    flagContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 10,
    },
    flagButton: {
        marginTop: 10,
        minWidth: 20,
    },
    flagsLeft: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 5,
        marginLeft: 5,
    },
    button: {
        backgroundColor: '#999',
        padding: 5,
    },
    buttonLabel: {
        fontSize: 20,
        color: '#DDD',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    title: {
        fontSize: 32,
        textAlign: 'center',
    },
        gridSizeTxt: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 12
    },
});