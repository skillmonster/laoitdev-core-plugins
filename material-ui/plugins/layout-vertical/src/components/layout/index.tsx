import { Box, CssBaseline } from '@mui/material';
import React from 'react';
import { Content } from './Content';
import { Navbar } from './Navbar';
import { Toolbar } from './Toolbar';

export interface DefaultProps {
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  toggleDrawer?: () => void;
}
export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        {React.Children.map(children, (child: any) =>
          React.cloneElement(child, { open, setOpen, toggleDrawer })
        )}
      </Box>
    </>
  );
};

Layout.Toolbar = Toolbar;
Layout.Navbar = Navbar;
Layout.Content = Content;
