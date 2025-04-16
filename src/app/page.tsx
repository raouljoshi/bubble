"use client";

import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import TrendingTopics from '@/components/community/TrendingTopics';
import PostSorting from '@/components/post/PostSorting';
import PostFeed from '@/components/post/PostFeed';

export default function Home() {
  const [currentSort, setCurrentSort] = useState<'hot' | 'new' | 'top' | 'rising'>('hot');

  const handleSortChange = (sort: 'hot' | 'new' | 'top' | 'rising') => {
    setCurrentSort(sort);
  };

  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto">
        <TrendingTopics />
        <PostFeed />
      </div>
    </MainLayout>
  );
}
