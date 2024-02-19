// material-ui
import { useMediaQuery, Container, Typography, Stack } from '@mui/material';


const AuthFooter = () => {
  const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="xl">
      <Stack
        direction={matchDownSM ? 'column' : 'row'}
        justifyContent={matchDownSM ? 'center' : 'space-between'}
        spacing={2}
        textAlign={matchDownSM ? 'center' : 'inherit'}
      >
        <Typography variant="subtitle2" color="secondary" component="span">
          &copy; Mantis React Dashboard Template By&nbsp;
          <Typography  variant="subtitle2" href="https://codedthemes.com" target="_blank" underline="hover" sx={{display:"inline", color:"blue"}}>
            CodedThemes
          </Typography>
        </Typography>

        <Stack direction={matchDownSM ? 'column' : 'row'} spacing={matchDownSM ? 1 : 3} textAlign={matchDownSM ? 'center' : 'inherit'}>
          <Typography
            variant="subtitle2"
            color="secondary"
            href="https://material-ui.com/store/contributors/codedthemes/"
            target="_blank"
            underline="hover"
          >
            MUI Templates
          </Typography>
          <Typography
            variant="subtitle2"
            color="secondary"
            href="https://codedthemes.com"
            target="_blank"
            underline="hover"
          >
            Privacy Policy
          </Typography>
          <Typography
            variant="subtitle2"
            color="secondary"
            href="https://codedthemes.support-hub.io/"
            target="_blank"
            underline="hover"
          >
            Support
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};

export default AuthFooter;
