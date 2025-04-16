import React from 'react';
import Header from './Header';
import Sidebar from '@/components/navigation/Sidebar';
import Footer from './Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 max-w-full px-4 py-4">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
