import React, { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface TrendingTopic {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  subreddit: string;
}

const upcomingClasses: {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}[] = [
  {
    id: '1',
    title: 'Yoga Flow Basics',
    description: 'An introductory class to Yoga Flow',
    imageUrl: 'https://via.placeholder.com/300x200?text=Yoga+Flow'
  },
  {
    id: '2',
    title: 'HIIT Extreme',
    description: 'High intensity interval training workout',
    imageUrl: 'https://via.placeholder.com/300x200?text=HIIT+Extreme'
  },
  {
    id: '3',
    title: 'Pilates Core',
    description: 'Strengthen and stabilize your core with Pilates',
    imageUrl: 'https://via.placeholder.com/300x200?text=Pilates+Core'
  },
  {
    id: '4',
    title: 'Zumba Dance',
    description: 'Dance your way to fitness with Zumba',
    imageUrl: 'https://via.placeholder.com/300x200?text=Zumba+Dance'
  },
];

const TrendingTopics: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Card className="mb-4 border-zinc-200 dark:border-zinc-800">
      <CardContent className="p-4 flex flex-col items-center">
        <p className="mb-4">View the gym's website for booking and details.</p>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline">Open Gym Website</Button>
          </DialogTrigger>
          <DialogContent className="w-full max-w-2xl p-0">
            <DialogHeader>
              <DialogTitle>Bonobo Gym</DialogTitle>
            </DialogHeader>
            <div className="relative">
              <iframe
                src="https://bonobogym.gymsystem.se"
                title="Bonobo Gym"
                className="w-full h-[500px] rounded-md"
                style={{ border: 0 }}
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
            <div className="mt-2 flex justify-end">
              <DialogClose asChild>
                <Button variant="outline">Close</Button>
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default TrendingTopics;
