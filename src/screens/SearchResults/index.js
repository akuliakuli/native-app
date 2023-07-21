import React from "react";
import { View, FlatList } from "react-native";
import Post from '../../components/post';

const SearchResultsScreen = (props) => {

  const { posts } = props;

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({item}) => <Post post={item} />}
      />
    </View>
  );
};

export default SearchResultsScreen;
