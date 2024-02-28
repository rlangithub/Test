import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import Checkbox from '@mui/material/Checkbox';
import style from './style.css'
import { grey } from '@mui/material/colors';
import logo from '../../assets/img/logo.png'
import { useState } from 'react';
const JudgeCard = (props) => {
    return (

        <>
            <div className='displayGrid alignItemsEnd colorWhite borderRadius10 width400px height250px' >
                <img src={props.props.src} className='img width100' />
                {/* <div className='backgroundWhite height30'>דובר</div> */}
                <div className='background-color-opasity padding12px justify-contentSpace-between displayGrid gridTemplateColumns2Auto borderRadius10' >
                    <Checkbox sx={{ color: grey[50] }} icon={<MicIcon/>} checkedIcon={<MicOffIcon/>}></Checkbox >
                    <div className='displayGrid gap10px align-items-center gridTemplateColumns2Auto'>
                        <div>
                            <div className='colorLightBlue'>ועדת ערר לענייני קורונה</div>
                            <div>כבוד השופטת {props.props.name}</div>
                        </div>
                        <div className='width30px'><img src={logo} /></div>
                    </div>
                </div>
            </div>
        </>


    )
}
export default JudgeCard;