// material-ui
import { Typography } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

// project import
import MainCard from '../components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => (
  <>
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/">
        Home
      </Link>
      <Typography color="text.primary" sx={{ fontWeight: '600' }}>
        Sample Page
      </Typography>
    </Breadcrumbs>
    <Typography variant="h1" sx={{ fontWeight: '700', fontSize: '18px', my: '20px' }}>
      Sample Page
    </Typography>
    <MainCard title="Sample Card">
      <Typography variant="body2">
        Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif ad
        minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in
        reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa qui
        officiate descent molls anim id est labours.
      </Typography>
    </MainCard>
  </>
);

export default SamplePage;
