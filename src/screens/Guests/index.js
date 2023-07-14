import { View, Text, Pressable } from 'react-native'
import React, {useState} from 'react'
import styles from './styles'

const GuestsScreen = () => {
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infant, setInfants] = useState(0);

    return (
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
    )
}

export default GuestsScreen