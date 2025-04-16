import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { HomeIcon, PopularIcon } from '@/components/ui/icons/reddit-icons';
import { TrendingUp } from 'lucide-react';

const Sidebar = ({ mobile }: { mobile?: boolean }) => {
  return (
    <div
      className={
        mobile
          ? "fixed top-0 left-0 z-50 h-full w-64 bg-white dark:bg-[#1A1A1B] shadow-lg transition-transform transform translate-x-0"
          : "h-[calc(100vh-48px)] w-[250px] flex-shrink-0 border-r border-zinc-200 dark:border-zinc-800 hidden md:block"
      }
    >
      <ScrollArea className="h-full py-4 px-2">
        {/* Feeds Section */}
        <div className="space-y-1 mb-4">
          <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 px-2" title="Your main feed">FEEDS</p>
          <Link href="/" className="block">
            <Button
              variant="ghost"
              className="w-full justify-start"
              title="View your personalized homepage feed"
            >
              <HomeIcon className="h-5 w-5 mr-2" />
              Home
            </Button>
          </Link>
          <Link href="/popular" className="block">
            <Button
              variant="ghost"
              className="w-full justify-start"
              title="See trending posts in the community"
            >
              <PopularIcon className="h-5 w-5 mr-2" />
              Popular
            </Button>
          </Link>
          <Link href="/all" className="block">
            <Button
              variant="ghost"
              className="w-full justify-start"
              title="Browse all recent activity"
            >
              <TrendingUp className="h-5 w-5 mr-2" />
              All
            </Button>
          </Link>
        </div>

        <Separator className="my-4" />

        {/* Topics Section */}
        <div className="space-y-1 mb-4">
          <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 px-2" title="Topics you may be interested in">TOPICS</p>
          <Link href="/topic/wellness" className="block">
            <Button
              variant="ghost"
              className="w-full justify-start"
              title="Explore wellness tips and fitness advice"
            >
              Wellness
            </Button>
          </Link>
          <Link href="/topic/nutrition" className="block">
            <Button
              variant="ghost"
              className="w-full justify-start"
              title="Learn about healthy eating and nutrition"
            >
              Nutrition
            </Button>
          </Link>
          <Link href="/topic/events" className="block">
            <Button
              variant="ghost"
              className="w-full justify-start"
              title="Stay updated on upcoming community events"
            >
              Events
            </Button>
          </Link>
          <Link href="/topic/more" className="block">
            <Button
              variant="ghost"
              className="w-full justify-start"
              title="Discover more topics of interest"
            >
              More
            </Button>
          </Link>
        </div>

        <Separator className="my-4" />

        {/* Community Section */}
        <div className="space-y-1 mb-4">
          <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 px-2" title="Community interactions">COMMUNITY</p>
          <Link href="/community/discuss" className="block">
            <Button
              variant="ghost"
              className="w-full justify-start"
              title="Join the conversation and share your thoughts"
            >
              Discuss
            </Button>
          </Link>
          <Link href="/community/progress" className="block">
            <Button
              variant="ghost"
              className="w-full justify-start"
              title="Track your fitness progress and achievements"
            >
              Progress
            </Button>
          </Link>
          <Link href="/community/stats" className="block">
            <Button
              variant="ghost"
              className="w-full justify-start"
              title="View community stats and insights"
            >
              Stats
            </Button>
          </Link>
        </div>

        <Separator className="my-4" />

        {/* Studio Section */}
        <div className="space-y-1 mb-4">
          <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 px-2" title="Studio-specific features">STUDIO</p>
          <Link href="/studio/classes" className="block">
            <Button
              variant="ghost"
              className="w-full justify-start"
              title="See class schedules and enroll in sessions"
            >
              Classes
            </Button>
          </Link>
          <Link href="/studio/members" className="block">
            <Button
              variant="ghost"
              className="w-full justify-start"
              title="View studio member profiles and community"
            >
              Members
            </Button>
          </Link>
          <Link href="/studio/announcements" className="block">
            <Button
              variant="ghost"
              className="w-full justify-start"
              title="Read the latest studio announcements"
            >
              Alerts
            </Button>
          </Link>
        </div>

        <Separator className="my-4" />

        {/* Extras Section */}
        <div className="space-y-1 mb-4">
          <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 px-2" title="Additional features and integrations">EXTRAS</p>
          <Link href="/extras/online" className="block">
            <Button
              variant="ghost"
              className="w-full justify-start"
              title="Access online classes and virtual sessions"
            >
              Online
            </Button>
          </Link>
          <Link href="/extras/chat" className="block">
            <Button
              variant="ghost"
              className="w-full justify-start"
              title="Chat live with community members"
            >
              Chat
            </Button>
          </Link>
          <Link href="/extras/payments" className="block">
            <Button
              variant="ghost"
              className="w-full justify-start"
              title="Manage subscription payments easily"
            >
              Payments
            </Button>
          </Link>
          <Link href="/extras/more" className="block">
            <Button
              variant="ghost"
              className="w-full justify-start"
              title="Explore additional features and ideas"
            >
              More
            </Button>
          </Link>
        </div>

        <Separator className="my-4" />

        {/* Resources Section */}
        <div className="space-y-1 mb-4">
          <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 px-2" title="Get support or adjust settings">RESOURCES</p>
          <Link href="/help" className="block">
            <Button
              variant="ghost"
              className="w-full justify-start"
              title="Get help and support"
            >
              Help
            </Button>
          </Link>
          <Link href="/settings" className="block">
            <Button
              variant="ghost"
              className="w-full justify-start"
              title="Adjust your application settings"
            >
              Settings
            </Button>
          </Link>
          <Link href="/premium" className="block">
            <Button
              variant="ghost"
              className="w-full justify-start"
              title="Explore premium features and benefits"
            >
              Premium
            </Button>
          </Link>
        </div>
      </ScrollArea>
    </div>
  );
};

export default Sidebar;
