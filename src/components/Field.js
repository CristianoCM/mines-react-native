import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import params from '../params';
import Mine from './Mine';
import Flag from './Flag';

export default props => {
    // Catching props properties and assigning to the following const variables
    const { flagged, mined, opened, nearMines, exploded } = props;

    // Checking and assigning which styles are necessary in the actual state
    const styleField = [styles.field];
    if (opened) styleField.push(styles.opened);
    if (exploded) styleField.push(styles.exploded);
    if (flagged) styleField.push(styles.flagged);
    if (!opened && !exploded) styleField.push(styles.regular);

    // Checking which color the block number needs to be based on how many near mines exist
    let color = null;
    if (nearMines > 0) {
        switch (nearMines) {
            case 1:
                color = '#2A28D7';
                break;
            case 2:
                color = '#2B520F';
                break;
            case 3:
            case 4:
            case 5:
                color = '#FF3300';
                break;
            default:
                color = '#333333';
        }
    }

    return (
        <TouchableWithoutFeedback onPress={props.onOpen}>
            <View style={styleField}>
                {/* If block was opened (touched) and isn't mined and near mines are more than zero: render near mines */}
                {/* Else return false, nothing to render */}
                { !mined && opened && nearMines > 0 ?
                    <Text style={[styles.label, { color: color }]}>
                        {nearMines}
                    </Text> : false }
                {/* If block was opened (touched) and is mined: render Mine */}
                {/* Else return false, nothing to render */}
                { mined && opened ? <Mine></Mine> : false }
                {/* If block was marked as safe: render Flag */}
                {/* Else return false, nothing to render */}
                { flagged && !opened ? <Flag></Flag> : false }
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    // Block dimensions
    field: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize,
    },
    //  Style for not opened blocks
    regular: {
        backgroundColor: '#999',
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderRightColor: '#333',
        borderBottomColor: '#333',
    },
    // Style for opened blocks
    opened: {
        backgroundColor: '#999',
        borderColor: '#777',
        justifyContent: 'center',
        alignItems: 'center',
    },
    // Style for near mines number
    label: {
        fontWeight: 'bold',
        fontSize: params.fontSize
    },
    // Style for the exact block that was exploded
    exploded: {
        backgroundColor: 'red',
        borderColor: 'red',
    },
});