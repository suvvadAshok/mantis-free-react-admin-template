import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, useMediaQuery } from '@mui/material';
import Drawer from '../components/Drawer';
import Header from '../components/Header/index';
import AntIcons from 'pages/iconPage';

const Layout = () => {
  const theme = useTheme();
  const matchDownLG = useMediaQuery(theme.breakpoints.down('lg'));
  const [open, setOpen] = useState(false);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  useEffect(() => {
    setOpen(!matchDownLG);
  }, [matchDownLG]);

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Header open={open} handleDrawerToggle={handleDrawerToggle} />
      <Drawer open={open} handleDrawerToggle={handleDrawerToggle} />
      <Box component="main" sx={{ width: '100%', marginTop: '50px', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
        {/* add here branch page  example:--->> <Dashboardpage /> */}
        <AntIcons />
      </Box>
    </Box>
  );
};

export default Layout;
