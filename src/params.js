import { Dimensions } from 'react-native';

const params = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15, // Upper panel proportion on screen
    difficultLevel: 0.1,
    getColumnsAmount() {
        const width = Dimensions.get('window').width;
        return Math.floor(width / this.blockSize);
    },
    getRowsAmount() {
        const height = Dimensions.get('window').height;
        const heightWithoutHeader = height * (1 - this.headerRatio);
        return Math.floor(heightWithoutHeader / this.blockSize);
    }
}

export default params;