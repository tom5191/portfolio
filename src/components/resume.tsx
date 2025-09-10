import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import FastfoodIcon from '@mui/icons-material/Fastfood';
import Typography from '@mui/material/Typography';
import { Card, CardContent, CardHeader, CardMedia } from '@mui/material';

import CURATE_LOGO from './../assets/curate-logo-blue.svg';
import BIZLIBRARY_LOGO from './../assets/bizlibrary.png';
import PINGPILOT_LOGO from './../assets/pingpilot.jpg';
import ZIPLINE_LOGO from './../assets/Zipline_20Logo.png';

export default function Resume() {
  return (
    <div className="workHistory">
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <FastfoodIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Card sx={{width: 300, backgroundColor:"rgba(234, 240, 240, 0.75)"}}>
              <CardMedia
                component="img"
                sx={{ width: 151, display:"flex", margin: 'auto', padding: 2 }}
                image={CURATE_LOGO}
                alt="Curate logo"
              />
              <CardContent>
                <Typography variant="h6" component="span">
                  Senior Software Engineer
                </Typography>
                <Typography>Curate</Typography>
              </CardContent>
            </Card>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <FastfoodIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Javascript Developer
            </Typography>
            <Typography>BizLibrary</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <FastfoodIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Software Engineer
            </Typography>
            <Typography>PingPilot</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <FastfoodIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Javascript Developer
            </Typography>
            <Typography>Zipline Labs</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}