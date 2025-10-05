import * as React from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import ArchitectureOutlinedIcon from '@mui/icons-material/ArchitectureOutlined';
import DeveloperModeOutlinedIcon from '@mui/icons-material/DeveloperModeOutlined';
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';
import TocOutlinedIcon from '@mui/icons-material/TocOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';


import { jobs } from '../resume';


interface Props {
  companyName: string,
  position: string,
  logo: string,
  startDate: string,
  endDate: string,
  responsibilities: string[]
}

const DEFAULT_JOB = {
  companyName: '',
  position: '',
  logo: '',
  startDate: '',
  endDate: '',
  responsibilities: ['']
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  boxShadow: 24,
  color: "#000",
  borderRadius: 5,
  p: 4,
};

const skillIconStyle = { height: 35, width: 35, marginRight: 2 };

const centerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const leftAreaExpertise = [{
  icon: <ReorderOutlinedIcon sx={skillIconStyle} />,
  title: 'Main Tech Stack',
  subtitle: 'Javascript/Typescript, Node.js, AWS, SQL/NoSQL, Git, NPM'
},
{
  icon: <DeveloperModeOutlinedIcon sx={skillIconStyle} />,
  title: 'Backend Development',
  subtitle: 'Serverless, Microservices, RESTful API, GraphQL API, etc'
},
{
  icon: <ArchitectureOutlinedIcon sx={skillIconStyle} />,
  title: 'Architecture Development',
  subtitle: 'Microservice, Event Driven, Database (SQL/NoSQL)'
}]

const rightAreaExpertise = [{
  icon: <TocOutlinedIcon sx={skillIconStyle} />,
  title: 'Secondary Tech Stack',
  subtitle: 'Python, C#, React, Vue.js, MUI'
},
{
  icon: <ComputerOutlinedIcon sx={skillIconStyle} />,
  title: 'Frontend Development',
  subtitle: 'Vue.js, React, MUI'
},
{
  icon: <IntegrationInstructionsOutlinedIcon sx={skillIconStyle} />,
  title: 'Third Party Integrations',
  subtitle: 'Stripe, Twilio, Salesforce, Marketo, Hubspot, and more'
}]

export default function Resume() {
  const [open, setOpen] = React.useState(false);
  const [job, setJob] = React.useState(DEFAULT_JOB);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleJobOnClick(job: Props) {
    setJob(job)
    handleOpen();
  }

  function JobModal() {
    return (
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Grid container>
              <Grid size={6} sx={{ alignContent: 'center' }}>
                <Typography id="modal-modal-description" variant="subtitle1">
                  Position
                </Typography>
                <Typography id="modal-modal-title" variant="h4" component="h2">
                  {job.position}
                </Typography>
              </Grid>
              <Grid size={3}></Grid>
              <Grid size={3} sx={{ alignItems: 'center' }}>
                <Typography id="modal-modal-description" variant="subtitle1">
                  Company
                </Typography>
                <Typography id="modal-modal-description" variant="h4" sx={{ fontSize: "1.75rem" }}>
                  {job.companyName}
                </Typography>
              </Grid>
            </Grid>
            <Divider />
            <Stack spacing={1} sx={{ marginTop: "15px", overflow: "hidden" }}>
              <Typography id="modal-modal-description" variant="h6">
                Responsibilities
              </Typography>
              <List>

                {
                  job.responsibilities.map((res: string, index: number) => {
                    return (
                      <ListItem key={index}>
                        <ListItemAvatar><AssignmentTurnedInOutlinedIcon /></ListItemAvatar>
                        <ListItemText primary={res} />
                      </ListItem>
                    )
                  })
                }
              </List>

            </Stack>
          </Box>
        </Modal>
      </div>
    );
  }

  function AreaOfExpertise({ icon, title, subtitle }: { icon: any, title: string, subtitle: string }) {
    return (
      <Box sx={{ width: "500px", height: 100 }}>
        <Stack>
          <Stack direction="row">
            {icon}
            <Typography variant='h4'>{title}</Typography>
          </Stack>
          <Typography variant='subtitle1' sx={{ marginLeft: 7, fontWeight: 200 }}>{subtitle}</Typography>
        </Stack>
      </Box>
    );
  }

  function JobLayout(job: Props) {
    return (
      <Box>
        <Card
          onClick={() => handleJobOnClick(job)}
          sx={{
            width: 275,
            height: 300,
            textAlign: "center",
            cursor: 'pointer',
            '&:hover': {
              border: "1px solid rgba(255, 255, 255, 0.6)",
            },
            background: "rgba(255, 255, 255, 0.2)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            color: "rgba(212, 212, 212, 1)"
          }}>
          <CardMedia
            component="img"
            sx={{ width: 151, height: 151, display: "flex", margin: 'auto', padding: 2, objectFit: 'contain', borderRadius: 100 }}
            image={job.logo}
            alt={`${job.companyName} logo`}
          />
          <CardContent>
            <Typography variant="h6" component="span" sx={{ fontWeight: 500 }}>
              {job.position}
            </Typography>
            <Typography variant='subtitle1' sx={{ fontWeight: 400 }}>{job.companyName}</Typography>
            <Typography sx={{ fontWeight: 200 }}>{job.startDate} - {job.endDate}</Typography>
          </CardContent>
        </Card>
      </Box>
    )
  }

  return (
    <Box className="sectionContainer workHistory">
      <Box className="appContainer">
        {/* <Typography variant='h1' sx={{ textAlign: 'center' }}>The things I've done</Typography> */}
        <Grid container>
          <Grid size={12}>
            <Typography className="ibm-plex-serif-medium" variant='h4' sx={{ textAlign: 'center' }}>Areas of Expertise</Typography>
            <Typography variant='subtitle1' sx={{ textAlign: 'center', fontWeight: 200 }}>
              A backend focused fullstack engineer working with a comprehensive list of technologies and services.
            </Typography>
          </Grid>
          <Grid container size={12} sx={{ padding: 6, marginTop: 4 }}>
            <Grid className="center_these" size={6} sx={{ ...centerStyle }}>
              {leftAreaExpertise.map((lae, index) => {
                return <AreaOfExpertise key={index} {...lae}></AreaOfExpertise>
              })}
            </Grid>
            <Grid className="center_these" size={6} sx={{ ...centerStyle }}>
              {rightAreaExpertise.map((lae, index) => {
                return <AreaOfExpertise key={index} {...lae}></AreaOfExpertise>
              })}
            </Grid>
          </Grid>
          <Box sx={{ padding: 3 }}>
            <Typography variant='h3' sx={{ textAlign: 'center', marginTop: 2 }}> History</Typography>
            <Typography variant='subtitle1' sx={{ textAlign: 'center', marginBottom: 2, fontWeight: 200 }}>a glimpse at who I've worked with.</Typography>
            <Stack direction="row" spacing={2}>
              {
                jobs.map((job, index) => { return <JobLayout key={index} {...job}></JobLayout> })
              }
            </Stack>
          </Box>
        </Grid>
        <JobModal />
      </Box>
    </Box>
  );
}