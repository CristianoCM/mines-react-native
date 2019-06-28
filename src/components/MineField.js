import React from 'react';
import { View, StyleSheet } from 'react-native';
import Field from './Field';

// Mapping rows and columns of the board created previously, then rendering board
export default props => {
    const rows = props.board.map((row, r) => {
        const columns = row.map((field, c) => {
            return <Field {...field} key={c}
                onOpen={() => props.onOpenField(r, c)}></Field>
        })
        return <View key={r} style={{flexDirection: 'row'}}>{columns}</View>
    })
    return <View style={styles.container}>{rows}</View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE',
    }
});