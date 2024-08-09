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
      <div className="flex justify-between w-[340px]">
        <Input
          style={{ borderRadius: 0 }}
          type="text"
          placeholder="Enter tweet ID"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          allowClear
          onPressEnter={onTweetId}
        />
        <Button style={{ borderRadius: 0 }} onClick={onTweetId} type="primary">
          Submit
        </Button>
      </div>
      <p className="font-extralight text-xs">Example : 1820185437157335272 </p>

      <div>{tweetId && <TweetComponent tweetId={tweetId} />}</div>
    </div>
  );
}
