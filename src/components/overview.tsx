import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import dayjs from 'dayjs';

/* ICONS */
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const image = require('./../assets/me.jpg');
  
  const START_DATE = "11/11/2014";
  const YEARS_EXPERIENCE = `${dayjs().diff(START_DATE, 'year')}+ years`;

  export default function Intro() {
    return (
      <div>
            <Stack direction="column" className='overview' spacing={2}> 
              <Avatar className="avatarImage" src={image} alt="Thomas Horner, Fullstack Software Engineer" sx={{ width: 150, height: 150 }}/>
              <h1>Tom Horner</h1>
              <h2>Fullstack Software Engineer</h2>

              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <LocationCityIcon/>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Location" secondary="Greater St. Louis Area, Mo"></ListItemText>
                </ListItem>
                <ListItem>
                   <ListItemAvatar>
                    <Avatar>
                      <WorkOutlineOutlinedIcon/>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Years Experience" secondary={YEARS_EXPERIENCE}></ListItemText>
                </ListItem>
                <Divider/>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <EmailOutlinedIcon/>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Email" secondary="thomasehorner@gmail.com"></ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <PhoneAndroidOutlinedIcon/>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Phone" secondary="+1 (636) 233-7652"></ListItemText>
                </ListItem>
              </List>
            </Stack>
      </div>
    );
  }