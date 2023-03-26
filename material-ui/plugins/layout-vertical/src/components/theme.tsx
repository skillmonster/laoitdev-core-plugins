import { createTheme } from "@mui/material";
import { fuseDark, skyBlue}from './colors';
export const lightPaletteText = {
  primary: 'rgb(17, 24, 39)',
  secondary: 'rgb(107, 114, 128)',
  disabled: 'rgb(149, 156, 169)',
};

export const darkPaletteText = {
  primary: 'rgb(255,255,255)',
  secondary: 'rgb(148, 163, 184)',
  disabled: 'rgb(156, 163, 175)',
};

export const theme = createTheme({
  palette: {
    mode: 'dark',
    divider: 'rgba(241,245,249,.12)',
    text: darkPaletteText,
    primary: {
      light: '#CECADF',
      main: '#5A4E93',
      dark: '#2E2564',
      contrastText: darkPaletteText.primary,
    },
    secondary: {
      light: '#B3EBD6',
      main: '#00BC77',
      dark: '#009747',
      contrastText: darkPaletteText.primary,
    },
    background: {
      paper: '#22184B',
      default: '#180F3D',
    },
    error: {
      light: '#ffcdd2',
      main: '#f44336',
      dark: '#b71c1c',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      '"Helvetica"',
      'Arial',
      'sans-serif'
    ].join(','),
    
  },
})


export const sidebarTheme = createTheme({
  palette: {
    mode: 'dark',
    divider: 'rgba(241,245,249,.12)',
    text: darkPaletteText,
    primary: {
      light: '#CECADF',
      main: '#5A4E93',
      dark: '#2E2564',
      contrastText: darkPaletteText.primary,
    },
    secondary: {
      light: '#B3EBD6',
      main: '#00BC77',
      dark: '#009747',
      contrastText: darkPaletteText.primary,
    },
    background: {
      paper: '#22184B',
      default: '#180F3D',
    },
    error: {
      light: '#ffcdd2',
      main: '#f44336',
      dark: '#b71c1c',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      '"Helvetica"',
      'Arial',
      'sans-serif'
    ].join(','),
    
  },
})

export const toolbarTheme = createTheme({
  palette: {
    mode: 'dark',
    divider: 'rgba(241,245,249,.12)',
    text: darkPaletteText,
    primary: {
      light: '#CECADF',
      main: '#5A4E93',
      dark: '#2E2564',
      contrastText: darkPaletteText.primary,
    },
    secondary: {
      light: '#B3EBD6',
      main: '#00BC77',
      dark: '#009747',
      contrastText: darkPaletteText.primary,
    },
    background: {
      paper: '#22184B',
      default: '#180F3D',
    },
    error: {
      light: '#ffcdd2',
      main: '#f44336',
      dark: '#b71c1c',
    },
  },
})