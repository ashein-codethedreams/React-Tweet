import TweetComponent from "@/components/Tweet";

export default function Home() {
  const tweetId = "1819797937414611313";
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Tweet Example in Next.js 13.4</h1>
      <TweetComponent tweetId={tweetId} />
    </main>
  );
}
