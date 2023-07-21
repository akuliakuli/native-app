import { View, Text, Image, useWindowDimensions, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'

const PostCarousel = (props) => {
    const navigate = useNavigation();
    const post = props.post;
    const width = useWindowDimensions().width
    const goToPostPage = () => {
        navigate.navigate("Post", {postId: post.id})
    }
    return(
        <Pressable onPress={goToPostPage} style={[styles.container, { width: width - 60}]}>
            <View style={styles.innerContainer}>
            <Image 
                  style={styles.image}
                  source={{uri: post.image}}
                />

            <View style={{flex: 1, marginHorizontal:5}}>
            <Text style={styles.bedrooms}>
                {post.bed} bed {post.bedrooms} bedroom
            </Text>

            <Text style={styles.description} numberOfLines={2}>
                {post.type}, {post.title}
            </Text>

            <Text style={styles.prices}>
                <Text style={styles.newPrice}> ${post.newPrice}</Text>
                / night
            </Text>

            </View>
            </View>
        </Pressable>
    )
}
export default PostCarousel