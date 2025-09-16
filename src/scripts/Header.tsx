import { useState, useEffect} from 'react';

const Header = () => {
  const [minimized, setMinimized] = useState(false);
  
  useEffect(() => {
    if (window.innerWidth < 600) {
      setMinimized(true);
    }
  }, [minimized]);

  return (
    <div>
      Header
    </div>
  );
};

export default Header;