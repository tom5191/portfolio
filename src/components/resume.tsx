import * as React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box'


import FastfoodIcon from '@mui/icons-material/Fastfood';
import Typography from '@mui/material/Typography';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import CURATE_LOGO from './../assets/curate-logo-blue.svg';
import BIZLIBRARY_LOGO from './../assets/bizlibrary.png';
import PINGPILOT_LOGO from './../assets/pingpilot.jpg';
import ZIPLINE_LOGO from './../assets/Zipline_20Logo.png';

const jobs = [{
  companyName: 'Curate',
  position: 'Senior Software Engineer',
  logo: CURATE_LOGO,
  startDate: '05/2021',
  endDate: '08/2025'
},
{
  companyName: 'BizLibrary',
  position: 'Javascript Developer',
  logo: BIZLIBRARY_LOGO,
  startDate: '11/2019',
  endDate: '05/2021'
},
{
  companyName: 'Ping Pilot',
  position: 'Software Engineer',
  logo: PINGPILOT_LOGO,
  startDate: '04/2017',
  endDate: '07/2019'
},
{
  companyName: 'Zipline Labs',
  position: 'Javascript',
  logo: ZIPLINE_LOGO,
  startDate: '07/2014',
  endDate: '11/2016'
}
]

interface Props {
  companyName: string,
  position: string,
  logo: string,
  startDate: string,
  endDate: string,
  index: number,
  responsibilities?: string[]
}

const DEFAULT_JOB = {
  companyName: '',
  position: '',
  logo:'',
  startDate: '',
  endDate: '',
  index: 0,
}
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

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
          <Typography id="modal-modal-title" variant="h6" component="h2">
           {job.position}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {job.companyName}
          </Typography>
        </Box>
      </Modal>
      </div>
    );
  }

  function Item(job: Props) {
    const {companyName, position, logo, startDate, endDate, index} = job;
    const isEven = index % 2 === 0;
    const float = isEven ? 'left' : 'right';
    const logoRadius = companyName === 'BizLibrary' ? 0 : 50
    return (
        <TimelineItem className="jobCard" onClick={() => handleJobOnClick(job)}>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <FastfoodIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Card sx={{
                width: 300, 
                borderRadius:5, 
                backgroundColor:"rgba(234, 240, 240, 0.75)", 
                textAlign:"center", 
                float:float
                }}>
              <CardMedia
                component="img"
                sx={{ width: 151, display:"flex", margin: 'auto', padding: 2, borderRadius:logoRadius }}
                image={logo}
                alt={`${companyName} logo`}
              />
              <CardContent>
                <Typography variant="h5" component="span">
                  {position}
                </Typography>
                <Typography variant='h6'>{companyName}</Typography>
                <Typography>{startDate}-{endDate}</Typography>
              </CardContent>
            </Card>
          </TimelineContent>
        </TimelineItem>
    );
  }

  return (
    <div className="sectionContainer workHistory">
      <div className="appContainer">
        <Timeline position="alternate">
          {jobs.map((job, index) => (
            <Item 
              key={index}
              companyName={job.companyName} 
              position={job.position} 
              logo={job.logo} 
              startDate={job.startDate} 
              endDate={job.endDate}
              index={index}
            />
          ))}
        </Timeline>
         <JobModal/>
      </div>
    </div>
  );
}