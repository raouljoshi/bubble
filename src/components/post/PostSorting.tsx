import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronDown, Flame, Sparkles, TrendingUp, Clock } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

interface PostSortingProps {
  currentSort?: 'hot' | 'new' | 'top' | 'rising';
  onSortChange?: (sort: 'hot' | 'new' | 'top' | 'rising') => void;
}

const PostSorting: React.FC<PostSortingProps> = ({
  currentSort = 'hot',
  onSortChange = () => {}
}) => {
  const handleSortChange = (sort: 'hot' | 'new' | 'top' | 'rising') => {
    onSortChange(sort);
  };

  const getSortIcon = () => {
    switch (currentSort) {
      case 'hot':
        return <Flame className="h-4 w-4 mr-2" />;
      case 'new':
        return <Clock className="h-4 w-4 mr-2" />;
      case 'top':
        return <TrendingUp className="h-4 w-4 mr-2" />;
      case 'rising':
        return <Sparkles className="h-4 w-4 mr-2" />;
      default:
        return <Flame className="h-4 w-4 mr-2" />;
    }
  };

  const getSortLabel = () => {
    switch (currentSort) {
      case 'hot':
        return 'Hot';
      case 'new':
        return 'New';
      case 'top':
        return 'Top';
      case 'rising':
        return 'Rising';
      default:
        return 'Hot';
    }
  };

  return (
    <Card className="p-2 mb-4 flex flex-wrap items-center border-zinc-200 dark:border-zinc-800">
      <div className="flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center mr-2 py-1.5 px-3 h-8">
              {getSortIcon()}
              {getSortLabel()}
              <ChevronDown className="h-4 w-4 ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => handleSortChange('hot')} className="flex items-center">
              <Flame className="h-4 w-4 mr-2" />
              Hot
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleSortChange('new')} className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              New
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleSortChange('top')} className="flex items-center">
              <TrendingUp className="h-4 w-4 mr-2" />
              Top
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleSortChange('rising')} className="flex items-center">
              <Sparkles className="h-4 w-4 mr-2" />
              Rising
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="hidden md:flex">
          <Button
            variant="ghost"
            className={`py-1.5 px-3 h-8 ${currentSort === 'hot' ? 'bg-zinc-100 dark:bg-zinc-800' : ''}`}
            onClick={() => handleSortChange('hot')}
          >
            <Flame className="h-4 w-4 mr-2" />
            Hot
          </Button>
          <Button
            variant="ghost"
            className={`py-1.5 px-3 h-8 ${currentSort === 'new' ? 'bg-zinc-100 dark:bg-zinc-800' : ''}`}
            onClick={() => handleSortChange('new')}
          >
            <Clock className="h-4 w-4 mr-2" />
            New
          </Button>
          <Button
            variant="ghost"
            className={`py-1.5 px-3 h-8 ${currentSort === 'top' ? 'bg-zinc-100 dark:bg-zinc-800' : ''}`}
            onClick={() => handleSortChange('top')}
          >
            <TrendingUp className="h-4 w-4 mr-2" />
            Top
          </Button>
          <Button
            variant="ghost"
            className={`py-1.5 px-3 h-8 ${currentSort === 'rising' ? 'bg-zinc-100 dark:bg-zinc-800' : ''}`}
            onClick={() => handleSortChange('rising')}
          >
            <Sparkles className="h-4 w-4 mr-2" />
            Rising
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default PostSorting;
