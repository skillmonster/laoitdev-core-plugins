import { Paper } from '@mui/material';
import { Layout } from 'ui/components/layout';
import Orders from 'ui/components/Orders';

const LayoutContainer = () => {
  return (
    <>
      <Layout>
        <Layout.Toolbar />
        <Layout.Navbar />
        <Layout.Content>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Orders />
          </Paper>
        </Layout.Content>
      </Layout>
    </>
  );
};
export default LayoutContainer;
