import { Box, Container, Grid, Paper, Toolbar } from '@mui/material';
import { FC } from 'react';
import { DefaultProps } from '.';
import Orders from '../Orders';

interface ContentProps extends DefaultProps {
  children?: React.ReactNode;
}
export const Content: FC<ContentProps> = ({ children }) => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
