"use client";
import TweetComponent from "@/components/Tweet";
import { Button, Input } from "antd";
import { useState } from "react";

export default function Home() {
  const [tweetId, setTweetId] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const onTweetId = () => {
    setTweetId(inputValue);
  };

  return (
    <div className="flex min-h-screen bg-white flex-col items-center py-10">
      <div className="flex">
        <Input
          type="text"
          placeholder="Enter tweet ID"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button onClick={onTweetId} type="primary">
          Submit
        </Button>
      </div>

      <div>{tweetId && <TweetComponent tweetId={tweetId} />}</div>
    </div>
  );
}
