import { View, Text, Pressable } from 'react-native'
import React, {useState} from 'react'
import styles from './styles'
import useNavigation from '@react-navigation/native'

const GuestsScreen = () => {
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infant, setInfants] = useState(0);

    const navigation = useNavigation()

    return (
        <View style={{justifyContent:'space-between', height:'100%'}}>

        <View>
            <View style={styles.row}>
                <View>
                    <Text style={{fontWeight: 'bold'}}>Adults</Text>
                    <Text style={{color:'lightgray'}}>Ages 13 or above</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Pressable 
                        onPress={() => setAdults(Math.max(0, adults - 1))}
                        style={styles.button}
                    >
                        <Text style={{fontSize:20,color:'gray'}}>-</Text>
                    </Pressable>

                    <Text style={{marginHorizontal:20,fontSize:16}}>{adults}</Text>

                    <Pressable 
                        onPress={() => setAdults(Math.max(0,adults + 1))}
                        style={styles.button}
                    >
                        <Text style={{fontSize:20,color:'gray'}}>+</Text>
                    </Pressable>
                </View>
            </View>

            <View style={styles.row}>
                <View>
                    <Text style={{fontWeight: 'bold'}}>Children</Text>
                    <Text style={{color:'lightgray'}}>Ages 2- 13</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Pressable 
                        onPress={() => setChildren(Math.max(0, children - 1))}
                        style={styles.button}
                    >
                        <Text style={{fontSize:20,color:'gray'}}>-</Text>
                    </Pressable>

                    <Text style={{marginHorizontal:20,fontSize:16}}>{children}</Text>

                    <Pressable 
                        onPress={() => setChildren(Math.max(0,children + 1))}
                        style={styles.button}
                    >
                        <Text style={{fontSize:20,color:'gray'}}>+</Text>
                    </Pressable>
                </View>
            </View>

            <View style={styles.row}>
                <View>
                    <Text style={{fontWeight: 'bold'}}>Infants</Text>
                    <Text style={{color:'lightgray'}}>Under 2</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Pressable 
                        onPress={() => setInfants(Math.max(0, infant - 1))}
                        style={styles.button}
                    >
                        <Text style={{fontSize:20,color:'gray'}}>-</Text>
                    </Pressable>

                    <Text style={{marginHorizontal:20,fontSize:16}}>{infant}</Text>

                    <Pressable 
                        onPress={() => setInfants(Math.max(0,infant + 1))}
                        style={styles.button}
                    >
                        <Text style={{fontSize:20,color:'gray'}}>+</Text>
                    </Pressable>
                </View>
            </View>
        </View>

            <Pressable
                onPress={() =>
                navigation.navigate('Home', {
                    screen: 'Explore',
                    params: {
                    screen: 'SearchResults',
                    params: {
                        guests: adults + children,
                        viewport: route.params.viewport,
                    }
                    },
                })
                }
                style={{
                marginBottom: 20,
                backgroundColor: '#f15454',
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                marginHorizontal: 20,
                borderRadius: 10,
                }}>
                <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
                Search
                </Text>
            </Pressable>
    
        </View>
    )
}

export default GuestsScreen