"use client";
import TweetComponent from "@/components/Tweet";
import { Button, Input } from "antd";
import { useState } from "react";

export default function Home() {
  // const tweetId = "1819756198666576067";
  const [tweetId, setTweetId] = useState(null);
  const onTweetId = () => {
    setTweetId("1819756198666576067");
  };
  return (
    <main className="flex min-h-screen bg-white flex-col items-center justify-between py-10">
      <div className="flex">
        <Input type="text" placeholder="enter tweet id" />
        <Button onClick={() => onTweetId()} type="primary">
          Test
        </Button>
      </div>

      <TweetComponent tweetId={tweetId} />
    </main>
  );
}
