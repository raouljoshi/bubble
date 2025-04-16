import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

interface WidgetCardProps {
  feature: string;
  studio: string;
  lastUpdated: string;
  children?: React.ReactNode;
}

const WidgetCard: React.FC<WidgetCardProps> = ({ feature, studio, lastUpdated, children }) => {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader className="border-b p-4">
        <CardTitle className="text-base sm:text-lg font-bold">{feature}</CardTitle>
        <CardDescription className="text-sm sm:text-base text-muted-foreground">
          {studio} &bull; Last updated: {lastUpdated}
        </CardDescription>
      </CardHeader>
      {children && (
        <CardContent className="p-4">
          {children}
        </CardContent>
      )}
    </Card>
  );
};

export default WidgetCard;
