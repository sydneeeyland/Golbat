import { Outlet } from 'react-router-dom';

import { NoSsr, Box } from '@mui/material';

import { useSidebarStyle } from '../Assets/Styles/MainLayoutStyles';

import CompanyHeading from '../Modules/Layout/CompanyHeading';
import Sidebar from '../Modules/Layout/Sidebar';
import ErrorPrompt from '../Modules/Layout/ErrorPrompt';
import ComponentWrapper from '../Components/Wrapper/ComponentWrapper';
import Toolbar from '../Modules/Layout/Toolbar';

function Main() {
  const Style = useSidebarStyle();

  const HandleSidebarToggle = () => {
    const body = document.querySelectorAll('body');
    body[0].classList.toggle(Style.toggle);
  };

  return (
    <NoSsr defer>
      <ComponentWrapper id="header" className={Style.header}>
        <CompanyHeading title={import.meta.env.VITE_APPLICATION_NAME} />
        <Box
          component="i"
          className="bi bi-list toggle-sidebar-btn"
          onClick={() => HandleSidebarToggle()}
        />
        <Toolbar />
      </ComponentWrapper>
      <ErrorPrompt />
      <ComponentWrapper id="aside" className={Style.sidebar}>
        <Sidebar />
      </ComponentWrapper>
      <ComponentWrapper id="main" className={Style.main}>
        <Outlet />
      </ComponentWrapper>
    </NoSsr>
  );
}

export default Main;
