import dayjs from 'dayjs';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const PORTFOLIO_IMAGE = require('./../assets/me3.jpg');
const START_DATE = "11/11/2014";
const YEARS_EXPERIENCE = `${dayjs().diff(START_DATE, 'year')}+ years`;

export default function Intro() {
  return (
    <Box className="sectionContainer intro">
      <Grid container>
        <Grid size={8} sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Stack direction="column" spacing={2}>
            <Typography variant="h1" sx={{ fontSize: '1.75rem', textAlign: 'start', paddingLeft: 25 }}>Hi, I'm Tom Horner</Typography>
            <Typography variant="h1" sx={{ fontSize: '4.5rem' }}>Senior Software Engineer</Typography>
            <Typography variant="h6" sx={{ textAlign: 'center', fontWeight: 200 }}>Passionately creating sophisticated web applications for the past {YEARS_EXPERIENCE}.</Typography>
            <Grid container>
              <Grid size={4}>
              </Grid>
              <Grid size={4} sx={{}}>
                <Stack direction="row" sx={{ margin: 'auto' }}>
                  <Box sx={{ margin: 'auto' }}>
                    <IconButton size="large" color="primary" sx={{ color: "#fff" }} target='blank' href='https://www.linkedin.com/in/tom5191'>
                      <LinkedInIcon fontSize='large' />
                    </IconButton>
                    <IconButton
                      size="large"
                      color="primary"
                      sx={{ color: "#fff" }}
                      target='blank'
                      href="https://www.github.com/tom5191">
                      <GitHubIcon fontSize='large' />
                    </IconButton>
                  </Box>
                </Stack>
              </Grid>
              <Grid size={4}>

              </Grid>
            </Grid>
          </Stack>
        </Grid>
        <Grid size={4}>
          <Box sx={{
            borderBottomLeftRadius: 100,
            borderBottomRightRadius: 100,
            bgcolor: 'rgba(149, 149, 149, 0.5)',
            width: 450,
            height: 500,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: `url(${PORTFOLIO_IMAGE})`,
            backgroundSize: 'cover',
            boxShadow: '10px 5px 10px rgba(149,149,149, 0.5)'
          }}>
          </Box>
        </Grid>
      </Grid>

    </Box>
  );
}