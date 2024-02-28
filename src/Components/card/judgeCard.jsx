import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import Checkbox from '@mui/material/Checkbox';
import style from './style.css'
import { grey } from '@mui/material/colors';
import logo from '../../assets/img/logo.png'
import { useState } from 'react';
const JudgeCard = (props) => {
    const [widthElement, setWidthElement] = useState(400);
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const widthDivs = (widthElement * props.prop2);
    const widthMyscreen = Math.ceil((screenWidth * 0.9));
    const row = Math.ceil((widthDivs / widthMyscreen));
    const heightMyscreen = Math.ceil((screenHeight * 0.9));
    const maxHeight = Math.ceil((heightMyscreen / 2));
    const heightElement = Math.ceil(maxHeight / row);
    const relative = screenWidth / screenHeight;
    const wElement = Math.ceil((heightElement * relative));
    if (wElement != widthElement)
        setWidthElement(wElement);
    return (

        <>
            <div className='displayGrid alignItemsEnd colorWhite borderRadius10' style={{ height: `${heightElement}px`, width: `${widthElement}px` }}>
                <img src={props.prop1.src} className='img' />
                <div className='background-color-opasity padding12px justify-contentSpace-between displayGrid gridTemplateColumns2Auto borderRadius10' >
                    <Checkbox sx={{ color: grey[50] }} icon={<MicIcon />} checkedIcon={<MicOffIcon />}></Checkbox >
                    <div className='displayGrid gap10px align-items-center gridTemplateColumns2Auto'>
                        <div>
                            <div className='colorLightBlue'>ועדת ערר לענייני קורונה</div>
                            <div>כבוד השופטת {props.prop1.name}</div>
                        </div>
                        <div className='width30px'><img src={logo} /></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default JudgeCard;