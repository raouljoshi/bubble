import React from "react";
import WidgetCard from "./WidgetCard";
import BenchmarkWidget from "./BenchmarkWidget";

// Mock data for posts
const MOCK_POSTS = [
  {
    id: "post1",
    title: "Around 6% of Americans believe they can defeat a grizzly bear in a hand-to-hand combat",
    author: "ootpdevelopments",
    subreddit: "BeAmazed",
    imageUrl: "https://ext.same-assets.com/3093754532/578098824.jpeg",
    upvotes: 15200,
    commentCount: 782,
    timePosted: "10 hr. ago"
  },
  {
    id: "post2",
    title: "Elon Musk Immediately Calls for Judges to Be Impeached After Rulings Overturn DOGE Firings",
    author: "legal_eagle",
    subreddit: "law",
    content: "Elon Musk is calling for federal judges to be impeached after they ruled against his DOJ firings...",
    imageUrl: "https://ext.same-assets.com/833702740/1337333062.jpeg",
    upvotes: 8431,
    commentCount: 312,
    timePosted: "5 hr. ago"
  },
  {
    id: "post3",
    title: "AIO for not quitting the gym because my boyfriend told me to",
    author: "fitnessgirl",
    subreddit: "AmIOverreacting",
    imageUrl: "https://ext.same-assets.com/1833200307/4071572060.jpeg",
    upvotes: 4982,
    commentCount: 896,
    timePosted: "5 hr. ago"
  },
  {
    id: "post4",
    title: "Government deficit rose 4% in Trumps first full month in office, despite DOGE",
    author: "political_analyst",
    subreddit: "pics",
    imageUrl: "https://ext.same-assets.com/2155016659/137380350.jpeg",
    upvotes: 12645,
    commentCount: 543,
    timePosted: "2 hr. ago"
  },
  {
    id: "post5",
    title: "DOGE vs. Deficit!!!",
    author: "memer123",
    subreddit: "MurderedByWords",
    imageUrl: "https://ext.same-assets.com/3532860323/2484214634.jpeg",
    upvotes: 9382,
    commentCount: 235,
    timePosted: "4 hr. ago"
  },
  {
    id: "post6",
    title: "Calls for AOC to Primary Schumer Mount After \"Gutless\" Surrender",
    author: "political_watcher",
    subreddit: "politics",
    content: "\"Schumer should step down from Democratic leadership—or be forced out—and let someone actually willing to fight Trump and Musk take his place.\"",
    upvotes: 7621,
    commentCount: 952,
    timePosted: "5 hr. ago"
  }
];

interface PostFeedProps {
  subreddit?: string;
  username?: string;
}

const PostFeed: React.FC<PostFeedProps> = ({ subreddit, username }) => {
  // In a real app, we would filter based on subreddit or username
  const posts = MOCK_POSTS;

  return (
    <div className="p-4 md:p-6 space-y-4">
      <BenchmarkWidget />
    </div>
  );
};

export default PostFeed;
