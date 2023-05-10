import { type NextPage } from "next";
import { InfiniteTweetList } from "~/components/InfiniteTweetList";
import { NewTweet } from "~/components/NewTweet";
import { api } from "~/utils/api";


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
  const tweets = api.tweet.infiniteFeed.useInfiniteQuery({}, { getNextPageParam: (lastPage) => lastPage.nextCursor})

  return <InfiniteTweetList tweets={tweets.data?.pages.flatMap((page) => page.tweets)} 
  isError={tweets.isError}
  isLoading={tweets.isLoading}
  hasNextPage={tweets.hasNextPage}
  fetchNextPage={tweets.fetchNextPage}
  />
}
export default Home;
