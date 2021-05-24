import { StyleSheet, Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    wrapper: {
        height:screenHeight
    }
})

export default styles;