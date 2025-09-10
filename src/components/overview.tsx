import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { ComponentType } from 'react';

import dayjs from 'dayjs';

/* ICONS */
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const image = require('./../assets/me-nobackground.png');
const START_DATE = "11/11/2014";
const YEARS_EXPERIENCE = `${dayjs().diff(START_DATE, 'year')}+ years`;
const info = [{
  Icon: LocationCityIcon,
  primary: "Location",
  secondary: "Greater St. Louis Area, Mo"
}, 
{
  Icon: WorkOutlineOutlinedIcon,
  primary: "Years Experience" ,
  secondary: YEARS_EXPERIENCE
},
{
  Icon: EmailOutlinedIcon,
  primary: "Email" ,
  secondary: "thomasehorner@gmail.com"
}
 ]

interface Props {
  Icon: ComponentType,
  primary: string,
  secondary: string
}

  export default function Intro() {
    function Item({primary, secondary, Icon}: Props) {
      return (
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Icon/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={primary} secondary={secondary}></ListItemText>
        </ListItem>
      );
    }
    return (
      <div className='overview'>
        <Stack direction="column" spacing={2}> 
          <Avatar className="avatarImage" src={image} alt="Thomas Horner, Fullstack Software Engineer" sx={{ width: 150, height: 150 }}/>
          <h1>Tom Horner</h1>
          <h2>Fullstack Software Engineer</h2>
          <IconButton size="large" color="primary">
            <LinkedInIcon/>
          </IconButton>
          <IconButton size="large" color="primary">
            <GitHubIcon/>
          </IconButton>
          <Divider/>
          <List>
            {info.map((i, index) => (
              <Item key={index} Icon={i.Icon} primary={i.primary} secondary={i.secondary} />
            ))}
          </List>
        </Stack>
      </div>
    );
  }