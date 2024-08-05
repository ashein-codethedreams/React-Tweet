import React from "react";
import { Tweet } from "react-tweet";

const TweetComponent = ({ tweetId }) => {
  return <Tweet id={tweetId} />;
};

export default TweetComponent;
