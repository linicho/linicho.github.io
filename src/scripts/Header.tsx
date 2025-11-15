import { useState, useEffect, useRef } from 'react';
import '../css/Header.css';
import { Grid } from '@cloudscape-design/components';
import ThemeToggle from './ThemeToggle';
import resume from '../assets/Resume_linicho.pdf';

const HeaderBar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const headerBoxRef = useRef<HTMLDivElement>(null);
  const headerSpacerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerBoxRef.current && headerSpacerRef.current) {
        const headerHeight = headerBoxRef.current.offsetHeight;
        headerSpacerRef.current.style.height = `${headerHeight}px`;
        // Set CSS custom property
        document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    
    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 800); // 50rem = 800px
    };

    // Initial check
    checkScreenSize();

    // Add event listener
    window.addEventListener('resize', checkScreenSize);

    // Clean up
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className='header-spacer' ref={headerSpacerRef}>
      <div className="header-box" ref={headerBoxRef}>
        <Grid
          disableGutters
          gridDefinition={[
            { colspan: { default: 7, xxs: 3 } },
            { colspan: { default: 5, xxs: 6 }, 
              offset: { xxs: 3, default: 0} 
            }
          ]}
        >
          <div className="header-title">Nicholas's Portfolio</div>
          <Grid
            disableGutters
            gridDefinition={[
              { colspan: { default: 2, xxs: 2 } }, // Empty space
              { colspan: { default: 2, xxs: 2 } }, // Theme Toggle
              { colspan: { default: 2, xxs: 2 } }, // Home
              { colspan: { default: 2, xxs: 2 } }, // Projects
              { colspan: { default: 2, xxs: 2 } }, // Resume
              { colspan: { default: 2, xxs: 2 } }, // Contact
            ]}
          >
            <div></div>
            <ThemeToggle />
            <div className="nav-item">
              {isSmallScreen ? (
                <span title="Resume">📄</span>
              ) : (
                <span>Home</span>
              )}
            </div>
            <div className="nav-item">
              {isSmallScreen ? (
                <span title="Projects">💼</span>
              ) : (
                <span>Projects</span>
              )}
            </div>
            <a className="nav-item"
                 href={resume}
                 rel="noopener noreferrer"
            >
              {isSmallScreen ? (
                <span title="Projects">📄</span>
              ) : (
                <span>Resume</span>
              )}
            </a>
            <div className="nav-item">
              {isSmallScreen ? (
                <span title="Projects">💼</span>
              ) : (
                <span>Contact</span>
              )}
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default HeaderBar;