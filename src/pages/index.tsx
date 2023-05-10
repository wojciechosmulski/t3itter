import { type NextPage } from "next";
import { InfiniteTweetList } from "~/components/InfiniteTweetList";
import { NewTweet } from "~/components/NewTweet";


const Home: NextPage = () => {
  return (
    <>
      <header className="sticky top-0 z-10 border-b bg-white pt-2">
        <h1 className="mb-2 px-4 text-lg font-bold">Home</h1>
      </header>
      <NewTweet />
      <RecentTweets />
    </>
  );
};

function RecentTweets() {
  const tweets = api.tweet.infiniteFeed

  return <InfiniteTweetList tweets={tweets} />
}
export default Home;
