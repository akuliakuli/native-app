import React from 'react'
import { 
    View, 
    Text , 
    ImageBackground , 
    Pressable
} from 'react-native'
import styles from './styles'
import Fontisto from 'react-native-vector-icons/Fontisto'

const HomeScreen = () => {
    return(
        <View>
            <Pressable 
                style={styles.searchButton}
                onPress={() => console.log("search button clicked")}>
                <Fontisto name="search" size={25} color={"pink"} />
                <Text style={styles.searchButtonText}>where are you going ?</Text>
            </Pressable>
            <ImageBackground 
                source={require('../../../assets/images/bg.jpg')} 
                style={styles.image}>
            <Text style={styles.title}>
                    Go Near
                 </Text> 

                <Pressable 
                    style={styles.button}
                    onPress={() => console.log("Hello")}>
                    <Text style={styles.buttonText}>Explore nearby states</Text>
                </Pressable>
            </ImageBackground>
        </View>
    )
}
export default HomeScreen