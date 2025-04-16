import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 px-4 py-6 text-xs text-zinc-500 dark:text-zinc-400">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1: Product/Features */}
          <div className="flex flex-col space-y-2">
            <Link href="#" className="hover:underline">Help</Link>
            <Link href="#" className="hover:underline">Reddit Coins</Link>
            <Link href="#" className="hover:underline">Reddit Premium</Link>
            <Link href="#" className="hover:underline">Communities</Link>
            <Link href="#" className="hover:underline">Topics</Link>
          </div>
          {/* Column 2: Company */}
          <div className="flex flex-col space-y-2">
            <Link href="#" className="hover:underline">About</Link>
            <Link href="#" className="hover:underline">Careers</Link>
            <Link href="#" className="hover:underline">Press</Link>
          </div>
          {/* Column 3: Support & Legal */}
          <div className="flex flex-col space-y-2">
            <Link href="#" className="hover:underline">User Agreement</Link>
            <Link href="#" className="hover:underline">Privacy Policy</Link>
            <Link href="#" className="hover:underline">Content Policy</Link>
            <Link href="#" className="hover:underline">Moderator Code</Link>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-300 dark:border-gray-700 pt-4 text-center">
          © 2025 Reddit, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;