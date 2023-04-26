/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@mui/styles';

export const useSidebarStyle = makeStyles({
  header: {
    display: 'flex',
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    alignItems: 'center',
    transition: 'all 0.3s',
    zIndex: '997',
    height: '60px',
    boxShadow: '0px 2px 20px rgba(1, 41, 112, 0.1)',
    backgroundColor: '#fff',
    paddingLeft: '20px',
    '& .logo': {
      textDecoration: 'none',
      fontSize: 26,
      fontWeight: 700,
      color: '#012970',
      fontFamily: 'Nunito, sans-serif',
      display: 'none',
      '@media (min-width: 1200px)': {
        width: '280px',
      },
      '@media (min-width: 992px)': {
        display: 'block !important',
      },
    },
    '& .toggle-sidebar-btn': {
      fontSize: 32,
      paddingLeft: 10,
      cursor: 'pointer',
      color: '#012970',
    },
    '& .header-title': {
      display: 'block',
      width: '280px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    '& .user-panel': {
      display: 'flex',
      flex: 1,
      justifyContent: 'end',
      padding: '0 40px 0 0',
      '& div': {
        cursor: 'pointer',
      },
    },
  },
  sidebar: {
    position: 'fixed',
    top: '60px',
    left: 0,
    bottom: 0,
    width: '270px',
    zIndex: 996,
    transition: 'all 0.3s',
    padding: '20px',
    overflowY: 'scroll',
    overflowX: 'visible',
    scrollbarWidth: 'thin',
    scrollbarColor: '#aab7cf transparent',
    boxShadow: '0px 0px 20px rgba(1, 41, 112, 0.1)',
    backgroundColor: '#fff',
    '@media (max-width: 1199px)': {
      left: '-270px',
    },
    '&::-webkit-scrollbar': {
      width: 5,
      height: 8,
      backgroundColor: '#fff',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#aab7cf',
    },
    '& div': {
      width: '100%',
    },
  },
  main: {
    marginTop: 60,
    padding: '20px 40px',
    transition: 'all 0.3s',
    backgroundColor: '#f6f6f6',
    minHeight: '93vh',
    '@media (max-width: 1199px)': {
      padding: '20px',
    },
    '@media (min-width: 1200px)': {
      marginLeft: '270px',
    },
  },
  toggle: {
    '& #aside': {
      '@media (max-width: 1199px)': {
        left: 0,
      },
      '@media (min-width: 1200px)': {
        left: -270,
      },
    },
    '& #main': {
      '@media (min-width: 1200px)': {
        marginLeft: 0,
      },
    },
  },
});

export const useSidebarListStyle = makeStyles({
  ul: {
    padding: 0,
    margin: 0,
    listStyle: 'none',
    '& li': {
      padding: 0,
      margin: 0,
      listStyle: 'none',
    },
    '& .nav-item': {
      marginBottom: '5px',
    },
    '& .nav-heading': {
      fontSize: 11,
      textTransform: 'uppercase',
      color: '#899bbd',
      fontWeight: 600,
      margin: '10px 0 5px 15px',
    },
    '& .nav-link': {
      display: 'flex',
      alignItems: 'center',
      fontSize: 15,
      fontWeight: 600,
      color: '#4154f1',
      transition: '0.3',
      background: '#f6f9ff',
      padding: '10px 15px',
      borderRadius: '4px',
    },
    '& .nav-link i': {
      fontSize: 16,
      marginRight: 10,
      color: '#4154f1',
    },
    '& .nav-link.collapsed': {
      color: '#012970',
      background: '#fff',
    },
    '& .nav-link.collapsed i': {
      color: '#899bbd',
    },
    '& .nav-link:hover': {
      color: '#4154f1',
      background: '#f6f9ff',
    },
    '& .nav-link:hover i': {
      color: '#4154f1',
    },
    '& .nav-link .bi-chevron-down': {
      marginRight: 0,
      transition: 'transform 0.2s ease-in-out',
    },
    '& .nav-link:not(.collapsed) .bi-chevron-down': {
      transform: 'rotate(180deg)',
    },
    '& .nav-content': {
      padding: '5px 0 0 0',
      margin: 0,
      listStyle: 'none',
    },
    '& .nav-content a': {
      display: 'flex',
      alignItems: 'center',
      fontSize: 14,
      fontWeight: 600,
      color: '#012970',
      padding: '10px 0 10px 40px',
      transition: '0.3s',
    },
    '& .nav-content a i': {
      fontSize: 6,
      marginRight: 8,
      lineHeight: 0,
      borderRadius: '50%',
    },
    '& .nav-content a:hover, .nav-content a.active': {
      color: '#4154f1',
    },
    '& .nav-content a.active i': {
      backgroundColor: '#4154f1',
    },
  },
});
