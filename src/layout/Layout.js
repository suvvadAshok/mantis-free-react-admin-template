// import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import Register from 'pages/authentication/Register';
const Layout = () => {
  // const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>

      <Box component="main" sx={{ width: '100%', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
        <Register />
      </Box>
    </Box>
  );
};

export default Layout;
