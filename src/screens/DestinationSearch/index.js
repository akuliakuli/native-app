import { View, Text , TextInput, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import search from '../../../assets/data/search.js'
import Entypo from "react-native-vector-icons/Entypo";
import {useNavigation} from '@react-navigation/native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import SuggestionRow from './SuggestionRow';


const DestinationSearchScreen = () => {
    const [inputText, setInputText ] = useState("");
    
    const navigation = useNavigation()
    return(
        <View style={styles.container}>
            {/* Input component */}
            <View style={{height:500}}>
            <GooglePlacesAutocomplete
                placeholder='Where are you going'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                }}
                styles={
                    {
                        textInput : styles.textInput
                    }
                }
                query={{
                    key: 'AIzaSyChbeX0C3xH1xlScRwg7SfV3-DsD8oq1no',
                    language: 'en',
                }}
                suppressDefaultStyles
                renderRow={(item) => <SuggestionRow item={item} />}
                />
            </View>
            <TextInput 
                style={styles.textInput}
                placeholder='where are you going ?'
                value={inputText}
                onChangeText={setInputText}
            />
        </View>
    )
}

export default DestinationSearchScreen