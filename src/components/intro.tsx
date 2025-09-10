import Avatar from "@mui/material/Avatar";
const PORTFOLIO_IMAGE = require('./../assets/me-nobackground.png');

export default function Intro() {
  return (
    <div className="intro">
      <div>
        <h1>Hi, I'm Tom</h1>
        <h3>I'm a Full Stack Software Engineer</h3>
      </div>
      <Avatar src={PORTFOLIO_IMAGE} sx={{height:600, width: 600}}/>
    </div>
  );
}