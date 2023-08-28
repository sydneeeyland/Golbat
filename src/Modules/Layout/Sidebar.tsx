import { NavLink } from 'react-router-dom';

import { Box, NoSsr, Typography } from '@mui/material';

import { Default as SidebarConfig } from '../../Constant/Sidebar/Default';

import { useSidebarListStyle } from '../../Assets/Styles/MainLayoutStyles';

function Sidebar() {
  const Style = useSidebarListStyle();
  return (
    <NoSsr defer>
      <Box component="ul" className={Style.ul}>
        {SidebarConfig.map(
          ({ withChildren, target, icon, name, isHidden, children, url }) => {
            return withChildren ? (
              <Box key={name} component="li" className="nav-item">
                <Box
                  component="a"
                  className="nav-link collapsed"
                  data-bs-target={`#${target}`}
                  data-bs-toggle="collapse"
                  href="."
                >
                  <Typography component="i" className={`${icon}`} />
                  <Box component="span">{name}</Box>
                  <Typography className="bi bi-chevron-down ms-auto" />
                </Box>
                <Box
                  component="ul"
                  id={`${target}`}
                  className="nav-content collapse"
                  data-bs-parent="#sidebar-nav"
                >
                  {children?.map((key) => {
                    return (
                      <Box component="li" key={`c-${key.name}`}>
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? 'nav-link active' : 'nav-link collapsed'
                          }
                          to={`${key.url}`}
                        >
                          <Typography component="i" className="bi bi-circle" />
                          <Box component="span">{key.name}</Box>
                        </NavLink>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            ) : (
              <Box key={name} component="li" className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link collapsed'
                  }
                  to={`${url}`}
                  style={{ display: isHidden ? 'none' : 'block' }}
                >
                  <Typography component="i" className={`${icon}`} />
                  <Box component="span">{name}</Box>
                </NavLink>
              </Box>
            );
          }
        )}
      </Box>
    </NoSsr>
  );
}

export default Sidebar;
