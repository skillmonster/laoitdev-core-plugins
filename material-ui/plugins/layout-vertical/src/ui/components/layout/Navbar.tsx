import { Hidden, IconButton, List, Theme, Toolbar } from '@mui/material';
import { ThemeProvider, styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import { mainListItems, secondaryListItems } from '../listItems';
import { FC } from 'react';
import { DefaultProps } from '.';
import { sidebarTheme } from '../theme';
import NavbarContent from './NavbarContent';
const drawerWidth: number = 280;
interface NavBarProps {
  open?: boolean;
}
const NavBar = styled('div', {
  shouldForwardProp: (prop) => prop !== 'open',
  name: 'NavBar',
  slot: 'Root',
})<NavBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 2,
  width: drawerWidth,
  whiteSpace: 'nowrap',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  boxShadow:
    '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12)',
  border: 'none',
  ...(!open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
  }),
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const Drawer = styled(MuiDrawer)(({ theme }: { theme: Theme }) => ({
  zIndex: theme.zIndex.drawer + 2,
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    width: drawerWidth,
    boxShadow:
      '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12)',
    border: 'none',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
  },
}));

export const Navbar: FC<DefaultProps> = ({ open, toggleDrawer }) => {
  return (
    <ThemeProvider theme={sidebarTheme}>
      <Hidden lgDown>
        <NavBar open={open}>
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
          <List component="nav">
            {mainListItems}

            {secondaryListItems}
          </List>
        </NavBar>
      </Hidden>
      <Hidden lgUp>
        <Drawer anchor={'left'} open={open} onClose={toggleDrawer}>
          <NavbarContent toggleDrawer={() => toggleDrawer} />
        </Drawer>
      </Hidden>
    </ThemeProvider>
  );
};
