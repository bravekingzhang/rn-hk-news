import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { getStory } from "../api/hackerNewsApi";

const NewsDetailsScreen = ({ route }) => {
  const { storyId } = route.params;
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then((data) => setStory(data));
  }, [storyId]);

  return (
    <View>
      <Text>{story.title}</Text>
      <Text>{story.url}</Text>
    </View>
  );
};

export default NewsDetailsScreen;
