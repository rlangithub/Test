import React, { useState } from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import Checkbox from '@mui/material/Checkbox';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import { Label } from '@mui/icons-material';

const participantCard = (props) => {
  const [speak, setSpeak] = useState(false);
  const [i, setI] = useState(<MicOffIcon />);
  console.log("first", speak);
  const speech = () => {
    speak ? setI(<MicOffIcon />) : setI(<MicIcon />)

    setSpeak(!speak);
    console.log("speak", speak);
    // // setIcon([1-icon]);
    // // console.log(icon);
    // console.log("speak", !speak);

  }
  return (
    <Card variant="outlined" sx={{ width: 320 }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img
            src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
            srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>

      <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
        <CardContent orientation="horizontal">
          <div>
            {/* <Divider orientation="vertical" /> פס עדן אפור*/}
            <Typography level="body-xs" fontWeight="md" textColor="text.secondary"></Typography>
            <Checkbox icon={i} onChange={() => speech()}></Checkbox >
            {/* <Checkbox   icon={<MicIcon/>} checkedIcon={<MicOffIcon/>, ()=>speech()}></Checkbox > */}
          </div>
          <div>
            {/* <Typography level="body-xs" fontWeight="md" textColor="text.secondary"> */}
              {/* <Label>עורר</Label> */}
            {/* </Typography> */}
            <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
              {/* {props.profile} */}
              {/* //עורך דין */}
              עורך דין 
              {/* {props.name} */}
              רבקי לנג
            </Typography>
          </div>

        </CardContent>
      </CardOverflow>
    </Card>
  );
}
export default participantCard;