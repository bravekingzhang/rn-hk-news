import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { getTopStories } from "../api/hackerNewsApi";
import NewsCard from "../components/NewsCard";

const HomeScreen = ({ navigation }) => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    getTopStories().then((data) => setStories(data));
  }, []);

  return (
    <View>
      <FlatList
        data={stories}
        renderItem={({ item }) => (
          <NewsCard storyId={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.toString()}
      />
    </View>
  );
};

export default HomeScreen;
