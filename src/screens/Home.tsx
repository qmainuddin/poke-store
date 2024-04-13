import { FC, useEffect, useState } from 'react'
import { Text, View } from 'react-native';
import styles from '../common/Styles';

const Home: FC = () => {
    return (
        <View style={[styles.main, styles.topMargin]}>
            <Text>Welcome to Pokemon App</Text>
        </View>
    )
}

export default Home;