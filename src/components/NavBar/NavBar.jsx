import React from 'react';
import NavBarFull from './NavBarFull'; // Ensure the path is correct
import NavMobile from './NavMobile'; // Ensure the path is correct

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full px-4 py-4 dark:bg-black bg-cream-light shadow-md">
      <div className="hidden lg:block">
        <NavBarFull />
      </div>
      <div className="block lg:hidden">
        <NavMobile />
      </div>
    </nav>
  );
};

export default Navbar;
