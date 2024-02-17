import { Box } from '@mui/material';
import Login from 'pages/Login';
const Layout = () => {

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Box component="main" sx={{ width: '100%', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
        <Login/>
      </Box>
    </Box>
  );
};

export default Layout;
