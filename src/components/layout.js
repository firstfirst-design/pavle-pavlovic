import * as React from 'react';
import Navigation from './navigation';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <div className="ml-28 mr-28 min-h-screen flex flex-col ">
      <div className="grow">
        <Navigation />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
