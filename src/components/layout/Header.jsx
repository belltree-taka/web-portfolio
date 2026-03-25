import MobileNav from '../ui/MobileNav';
import MobileNavToggleBtn from '../ui/MobileNavToggleBtn';
import DesktopNav from '../ui/DesktopNav';
import { useEffect, useState } from 'react';

const Header = ({isMobileNavOpen, setIsMobileNavOpen, mobileNavClickHandler}) => {
  const [isDesktop, setIsDesktop] = useState(() => window.matchMedia('(min-width: 1024px)').matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');

    const handleMediaChange = (e) => {
      setIsDesktop(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  return (
    <>
      <header className="relative">
          {isDesktop ? (
            <DesktopNav/>
          ) : (
            <>
              {!isMobileNavOpen && <MobileNavToggleBtn mobileNavClickHandler={mobileNavClickHandler}/>}
              {isMobileNavOpen && <MobileNav setIsMobileNavOpen={setIsMobileNavOpen} mobileNavClickHandler={mobileNavClickHandler}/>}
            </>
          )}
      </header>
    </>
  )
}

export default Header