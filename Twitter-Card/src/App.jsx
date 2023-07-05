import React from "react";
import Avatar from "./assets/avatar.jpg";
import TwitterCard from "./components/TwitterCard";

const App = () => {
  const user1 = {
    name: "John Doe",
    handle: "@johndoe",
    tweet:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, justo ac ultrices ultricies, nisl nunc ultrices nunc, vitae lacinia lorem quam nec nunc.",
    avatar: Avatar,
    time: "1h ago",
    likes: 10,
    retweets: 5,
    comments: 2,
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <TwitterCard
        name = {user1.name}
        handle = {user1.handle}
        tweet = {user1.tweet}
        avatar = {user1.avatar}
        time = {user1.time}
        likes = {user1.likes}
        retweets = {user1.retweets}
        comments = {user1.comments}
      />
    </div>
  );
};

export default App;
