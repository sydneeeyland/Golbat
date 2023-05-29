import { Outlet } from 'react-router-dom';

import { NoSsr, Box } from '@mui/material';

import { useSidebarStyle } from '../Assets/Styles/MainLayoutStyles';

import CompanyHeading from '../Modules/Layout/CompanyHeading';
import Sidebar from '../Modules/Layout/Sidebar';
import User from '../Modules/Layout/User';
import Notification from '../Modules/Layout/Notification';
import Announcement from '../Modules/Layout/Announcement';
import LoadingComponent from '../Components/Loading/LoadingComponent';

function Main() {
  const Style = useSidebarStyle();

  const HandleSidebarToggle = () => {
    const body = document.querySelectorAll('body');
    body[0].classList.toggle(Style.toggle);
  };

  return (
    <>
      <Box id="header" className={Style.header}>
        <CompanyHeading title={import.meta.env.VITE_APPLICATION_NAME} />
        <Box
          component="i"
          className="bi bi-list toggle-sidebar-btn"
          onClick={() => HandleSidebarToggle()}
        />
        <Box
          style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'end',
            marginRight: 20,
            gap: 10,
          }}
        >
          <Announcement />
          <Notification />
          <User />
        </Box>
      </Box>
      <Box id="aside" className={Style.sidebar}>
        <Sidebar />
      </Box>
      <Box id="main" className={Style.main}>
        <NoSsr defer fallback={<LoadingComponent />}>
          <Outlet />
        </NoSsr>
      </Box>
    </>
  );
}

export default Main;
