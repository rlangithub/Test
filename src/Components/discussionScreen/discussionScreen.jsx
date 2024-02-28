import Judges from '../participants/judges'
import Prosecutor from '../participants/prosecutors'
import Answerings from '../participants/answerings'
import logo from '../../assets/img/logo.png'
import styleDiscussinScreen from './styleDiscussinScreen.css';
import VideocamIcon from '@mui/icons-material/Videocam';
import MicIcon from '@mui/icons-material/Mic';
import PresentToAllRoundedIcon from '@mui/icons-material/PresentToAllRounded';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import FiberManualRecordSharpIcon from '@mui/icons-material/FiberManualRecordSharp';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import BalanceIcon from '@mui/icons-material/Balance';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Button from '@mui/material/Button';
;

const DiscussionScreen = () => {
    return (
        <>
            <div className='height100vh margin10px displayGrid'>

                <div className='colorWhite displayGrid grid-column2-11 grid-row1'>
                    <div className='displayGrid  grid-column1-3 grid-row1-3'>
                        <div className='displayGrid grid-template-columns2Auto align-itemsCenter'>
                            <div>מקליט</div>
                            <FiberManualRecordSharpIcon fontSize='small'></FiberManualRecordSharpIcon>
                        </div>
                        <div className='grid-column2-3 displayGrid align-itemsCenter'><ShieldOutlinedIcon fontSize='small'></ShieldOutlinedIcon></div>
                        <div className='grid-column3-4 displayGrid align-itemsCenter'><OpenInFullIcon fontSize='small'></OpenInFullIcon></div>
                    </div>

                    <div className='grid-column9-12 grid-row1-3'>
                        <div>משרד המשפטים, ועדת ערר לענייני
                            קורונה- השתתפות בהוצאות קבועות</div>
                        <div>תיק מספר 64949-02-22</div>
                    </div>
                </div>

                <div id="main" className='displayGrid grid-row2-8 grid-column4-9 backgroundBlueDiscussin' >
                    <div id="main" className='displayGrid grid-column2-10 grid-row2-8'>
                        <div id="Judges" className='displayGrid'><Judges /></div>
                        <div className='displayGrid justify-content-center gap10px grid-template-columns2Auto'>
                            <div className='width50'><Answerings /></div>
                            <div className='width50'><Prosecutor /></div>
                        </div>
                    </div>
                </div>

                <div className='displayGrid grid-row1-12'>
                    <div className='colorWhite displayGrid justify-contentEnd grid-column11-12 backgroundBlue'>
                        <div className='grid-row1-3'><img src={logo} /></div>
                        <div className='grid-row3-5 displayGrid align-content-space-around'>
                            <div>
                                <GroupOutlinedIcon fontSize='small'></GroupOutlinedIcon>
                                <div>אנשים</div>
                            </div>
                            <div>
                                <BalanceIcon fontSize='small'></BalanceIcon>
                                <div>פרטי דיון</div>
                            </div>
                            <div>
                                <ShieldOutlinedIcon fontSize='small'></ShieldOutlinedIcon>
                                <div>מנהל דיון</div>
                            </div>
                            <div>
                                <SettingsOutlinedIcon fontSize='small'></SettingsOutlinedIcon>
                                <div>הגדרות</div>
                            </div>
                        </div>
                        <div className='grid-row11-12'>
                            <button className='backgroundButton colorRed padding12px border-radius40'>יציאה מהדיון</button>
                        </div>
                    </div>
                </div>

                <div className='colorWhite displayGrid grid-template-columns2Auto grid-column2-11 grid-row11-12'>
                    <div className='displayGrid gap10px justify-contentStart grid-column1-2 grid-template-columns2Auto'>
                        <label className='backgroundRed border-radius25 height-fit-content padding3px'>LIVE</label>
                        <div>01:24:16</div>
                    </div>
                    <div>
                        <Button variant="contained" className='backgroundButton border-radius10' endIcon={<PresentToAllRoundedIcon />}> שיתוף </Button>
                        <Button variant="contained" className='backgroundButton border-radius10' endIcon={<MicIcon />}>מיקרופון</Button>
                        <Button variant="contained" className='backgroundButton border-radius10' endIcon={<VideocamIcon />}> מצלמה </Button>
                    </div>
                </div >
            </div>

        </>
    )
}
export default DiscussionScreen;