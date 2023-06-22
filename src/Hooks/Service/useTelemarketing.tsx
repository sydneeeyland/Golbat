import { useState } from 'react';

function useTelemarketing() {
  const [toggleFilterDrawer, setToggleFilterDrawer] = useState(false);

  const handleToggleFilterDrawer = () => {
    setToggleFilterDrawer(!toggleFilterDrawer);
  };

  return { toggleFilterDrawer, handleToggleFilterDrawer };
}

export default useTelemarketing;
