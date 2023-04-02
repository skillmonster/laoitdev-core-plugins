import { Box, IconButton, List, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FC, memo } from 'react';
import { mainListItems, secondaryListItems } from '../listItems';
import MenuIcon from '@mui/icons-material/Menu';
const Root = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  '& ::-webkit-scrollbar-thumb': {
    boxShadow: `inset 0 0 0 20px ${
      theme.palette.mode === 'light'
        ? 'rgba(0, 0, 0, 0.24)'
        : 'rgba(255, 255, 255, 0.24)'
    }`,
  },
  '& ::-webkit-scrollbar-thumb:active': {
    boxShadow: `inset 0 0 0 20px ${
      theme.palette.mode === 'light'
        ? 'rgba(0, 0, 0, 0.37)'
        : 'rgba(255, 255, 255, 0.37)'
    }`,
  },
}));

const Content = styled('div')(({ theme }) => ({
  // overscrollBehavior: 'contain',
  // overflowX: 'hidden',
  // overflowY: 'auto',
  // WebkitOverflowScrolling: 'touch',
  // backgroundRepeat: 'no-repeat',
  // backgroundSize: '100% 40px, 100% 10px',
  // backgroundAttachment: 'local, scroll',
}));

interface NavbarContentProps {
  toggleDrawer: () => void;
}

const NavbarContent: FC<NavbarContentProps> = ({ toggleDrawer }) => {
  return (
    <Root
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
        {/* <div className="flex flex-1 mx-4">
          <Logo />
        </div>

        <NavbarToggleButton className="w-40 h-40 p-0" /> */}
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Box>

      <Content
        className="flex flex-1 flex-col min-h-0"
        // option={{ suppressScrollX: true, wheelPropagation: false }}
      >
        {/* <UserNavbarHeader />

        <Navigation layout="vertical" />

        <div className="flex flex-0 items-center justify-center py-48 opacity-10">
          <img
            className="w-full max-w-64"
            src="assets/images/logo/logo.svg"
            alt="footer logo"
          />
        </div> */}
        <List component="nav">
          {mainListItems}
          {secondaryListItems}
        </List>
      </Content>
    </Root>
  );
};

export default memo(NavbarContent);
