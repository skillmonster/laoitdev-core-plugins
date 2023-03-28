import { ThemeProvider } from '@mui/material/styles';
import { RouterProvider } from 'react-router-dom';

import { theme } from 'ui/components/theme';
import { router } from 'ui/config/route';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
