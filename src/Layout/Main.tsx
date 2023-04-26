// Package
import { Outlet } from 'react-router-dom';

// Components
import { NoSsr, Box } from '@mui/material';

// Styles
import { useSidebarStyle } from '../Assets/Styles/MainLayoutStyles';

// Modules
import CompanyHeading from '../Modules/Layout/CompanyHeading';
import Sidebar from '../Modules/Layout/Sidebar';
import User from '../Modules/Layout/User';

function Main() {
  const Style = useSidebarStyle();
  const CompanyName = 'Chenvel Services Inc';

  const HandleSidebarToggle = () => {
    const body = document.querySelectorAll('body');
    body[0].classList.toggle(Style.toggle);
  };

  return (
    <NoSsr defer>
      <Box id="header" className={Style.header}>
        <CompanyHeading title={CompanyName} />
        <Box
          component="i"
          className="bi bi-list toggle-sidebar-btn"
          onClick={() => HandleSidebarToggle()}
        />
        <User />
      </Box>
      <Box id="aside" className={Style.sidebar}>
        <Sidebar />
      </Box>
      <Box id="main" className={Style.main}>
        <Outlet />
      </Box>
    </NoSsr>
  );
}

export default Main;
