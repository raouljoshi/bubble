import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UpvoteIcon, DownvoteIcon, CommentIcon, ShareIcon, SaveIcon } from '@/components/ui/icons/reddit-icons';

interface PostProps {
  id: string;
  title: string;
  author: string;
  subreddit: string;
  content?: string;
  imageUrl?: string;
  upvotes: number;
  commentCount: number;
  timePosted: string;
}

const Post: React.FC<PostProps> = ({
  id,
  title,
  author,
  subreddit,
  content,
  imageUrl,
  upvotes,
  commentCount,
  timePosted,
}) => {
  return (
    <Card className="reddit-post mb-3 overflow-hidden">
      {/* Vote Column */}
      <div className="flex">
        <div className="w-10 bg-zinc-50 dark:bg-zinc-900 flex flex-col items-center pt-2">
          <Button variant="ghost" size="icon" className="h-8 w-8 upvote-btn">
            <UpvoteIcon className="h-6 w-6" />
          </Button>
          <span className="text-xs font-semibold my-1">{upvotes}</span>
          <Button variant="ghost" size="icon" className="h-8 w-8 downvote-btn">
            <DownvoteIcon className="h-6 w-6" />
          </Button>
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="p-2">
            {/* Post Header */}
            <div className="flex items-center text-xs text-zinc-500 dark:text-zinc-400 mb-2">
              <Link href={`/r/${subreddit}`} className="font-bold hover:underline">
                r/{subreddit}
              </Link>
              <span className="mx-1">•</span>
              <span>Posted by</span>
              <Link href={`/user/${author}`} className="hover:underline mx-1">
                u/{author}
              </Link>
              <span className="mx-1">{timePosted}</span>
            </div>

            {/* Post Title */}
            <Link href={`/r/${subreddit}/comments/${id}`}>
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2 leading-snug hover:underline">
                {title}
              </h2>
            </Link>

            {/* Post Content */}
            <CardContent className="p-0">
              {content && <p className="text-sm mb-3">{content}</p>}
              {imageUrl && (
                <div className="relative mt-2 overflow-hidden max-h-[512px]">
                  <img
                    src={imageUrl}
                    alt={title}
                    className="w-full object-contain max-h-[512px]"
                  />
                </div>
              )}
            </CardContent>
          </div>

          {/* Post Footer */}
          <CardFooter className="p-0 border-t border-zinc-100 dark:border-zinc-800">
            <div className="flex items-center text-xs text-zinc-500 dark:text-zinc-400 w-full">
              <Button variant="ghost" size="sm" className="flex items-center px-2 py-1.5 rounded-none">
                <CommentIcon className="h-4 w-4 mr-1" />
                <span>{commentCount} Comments</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center px-2 py-1.5 rounded-none">
                <ShareIcon className="h-4 w-4 mr-1" />
                <span>Share</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center px-2 py-1.5 rounded-none">
                <SaveIcon className="h-4 w-4 mr-1" />
                <span>Save</span>
              </Button>
            </div>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
};

export default Post;
