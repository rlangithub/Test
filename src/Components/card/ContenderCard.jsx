import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import Checkbox from '@mui/material/Checkbox';
import style from './style.css'
import { grey } from '@mui/material/colors';
const ContenderCard = (props) => {
    return (
        <div className='width300px height150px displayGrid alignItemsEnd colorWhite borderRadius10' >
            {/* <div className='z-index2 backgroundWhite colorblue grid-column11-12 grid-row1'>צד {props.props.profile}</div> */}
            {/* style={{backgroundImage: url({props.props.src}) }} */}
            <img src={props.props.src} className='img' />
            <div className='background-color-opasity padding12px justify-contentSpace-between displayGrid gridTemplateColumns2Auto borderRadius10' >
                <Checkbox sx={{ color: grey[50] }} icon={<MicOffIcon />} checkedIcon={<MicIcon />}></Checkbox >
                <div>
                    <div className='colorLightBlue'>צד {props.props.profile}</div>
                    <div>עו"ד {props.props.name}</div>
                </div>
            </div>
        </div>

    )
}
export default ContenderCard