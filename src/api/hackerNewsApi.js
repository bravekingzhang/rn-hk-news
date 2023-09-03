const BASE_API_URL = "https://hacker-news.firebaseio.com/v0";

export const getTopStories = async () => {
  const response = await fetch(`${BASE_API_URL}/topstories.json`);
  const data = await response.json();
  return data.slice(0, 30);
};

export const getStory = async (storyId) => {
  const response = await fetch(`${BASE_API_URL}/item/${storyId}.json`);
  const data = await response.json();
  return data;
};
