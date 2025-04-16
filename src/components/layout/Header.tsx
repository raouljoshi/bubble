import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { NotificationIcon, ChatIcon, CreatePostIcon } from '@/components/ui/icons/reddit-icons';
import { Search, ChevronDown, Menu } from 'lucide-react';
import Sidebar from '@/components/navigation/Sidebar';

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="h-16 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#1A1A1B] shadow-md flex items-center px-5 sticky top-0 z-50">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/bubble-logo.svg" alt="Bubble Logo" width={32} height={32} priority />
              <h1 className="text-black dark:text-white font-semibold ml-2 hidden md:block">bubble</h1>
            </Link>
            {/* Mobile Hamburger */}
            <div className="md:hidden ml-4">
              <button onClick={toggleSidebar} className="h-8 w-8 flex items-center justify-center">
                <Menu className="h-6 w-6" />
              </button>
            </div>

            {/* Admin Portal dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="ml-2 pl-2 pr-4 h-8">
                  <span className="text-sm font-medium">Admin Portal</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Admin</DropdownMenuLabel>
                <DropdownMenuItem>Dashboard</DropdownMenuItem>
                <DropdownMenuItem>Scheduling & Booking</DropdownMenuItem>
                <DropdownMenuItem>Membership</DropdownMenuItem>
                <DropdownMenuItem>Communication</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Extras</DropdownMenuLabel>
                <DropdownMenuItem>Virtual Classes</DropdownMenuItem>
                <DropdownMenuItem>Chat & Support</DropdownMenuItem>
                <DropdownMenuItem>Payment</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Studio Settings</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>


          {/* Right Section */}
          <div className="flex items-center justify-end space-x-4">
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="text-zinc-500 dark:text-zinc-400">
                <NotificationIcon />
              </Button>
              <Button variant="ghost" size="icon" className="text-zinc-500 dark:text-zinc-400">
                <ChatIcon />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="px-2 h-9">
                    <div className="flex items-center">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Help Center</DropdownMenuItem>
                  <DropdownMenuItem>Terms & Policies</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Log Out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 hidden md:block">
              Check in
            </button>
          </div>
        </div>
      </header>
      {isSidebarOpen && (
        <div className="md:hidden">
          <div className="fixed inset-0 bg-black opacity-50" onClick={toggleSidebar}></div>
          <div className="fixed top-0 left-0 z-50">
            {/* Render mobile Sidebar */}
            <Sidebar mobile />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
