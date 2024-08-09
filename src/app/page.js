"use client";
import TweetComponent from "@/components/Tweet";
import { Button, Input } from "antd";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [tweetId, setTweetId] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    // Automatically focus on the input box when the page loads
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const onTweetId = () => {
    setTweetId(inputValue);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value === "") {
      setTweetId(null); // Clear the tweetId when input is cleared
    }
  };

  const handleClear = () => {
    setInputValue(""); // Clear the input value
    setTweetId(null); // Clear the tweetId
  };

  return (
    <div className="flex min-h-screen bg-white flex-col items-center py-10">
      <div className="flex justify-between w-[340px]">
        <Input
          style={{ borderRadius: 0 }}
          type="text"
          placeholder="Enter tweet ID"
          value={inputValue}
          onChange={handleChange}
          allowClear
          onClear={handleClear} // Handle clear event
          onPressEnter={onTweetId}
          ref={inputRef} // Attach the ref to the input
        />
        <Button style={{ borderRadius: 0 }} onClick={onTweetId} type="primary">
          Submit
        </Button>
      </div>
      <p className="font-extralight text-xs">Example: 1820185437157335272</p>

      <div>{tweetId && <TweetComponent tweetId={tweetId} />}</div>
    </div>
  );
}
