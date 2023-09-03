import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text } from "react-native";
import { getStory } from "../api/hackerNewsApi";

const NewsCard = ({ storyId, navigation }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then((data) => setStory(data));
  }, [storyId]);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("NewsDetails", { storyId })}
    >
      <Text>{story.title}</Text>
    </TouchableOpacity>
  );
};

export default NewsCard;
