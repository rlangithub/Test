import React from 'react';
import Button from '@mui/material/Button';
import VideocamIcon from '@mui/icons-material/Videocam';
import Grid from '@mui/material/Grid';
import MicIcon from '@mui/icons-material/Mic';
import PresentToAllRoundedIcon from '@mui/icons-material/PresentToAllRounded';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import FiberManualRecordSharpIcon from '@mui/icons-material/FiberManualRecordSharp';
import { grey } from '@mui/material/colors';
import Prosecutor from '../participants/prosecutors';
import Answerings from '../participants/answerings';
import Judges from '../participants/judges'

const DiscussionScreen = () => {
    return (
        <>
            <Grid fontFamily={'Rubik, Calibri'} bgcolor={grey[900]} color={grey[50]}>
                <Grid container xs={11} margin={6} center='true' direction="row" justifyContent="space-between" alignItems="baseline">
                    <Grid container gap={1} xs={4} direction="row" justifyContent="flex-start" alignItems="flex-start">
                        <Grid container xs={2}>
                            <Grid>מקליט</Grid>
                            <Grid><FiberManualRecordSharpIcon fontSize='small'></FiberManualRecordSharpIcon></Grid>
                        </Grid>
                        <Grid><ShieldOutlinedIcon fontSize='small'></ShieldOutlinedIcon></Grid>
                        <Grid><OpenInFullIcon fontSize='small'></OpenInFullIcon></Grid>
                    </Grid>
                    <Grid container direction="column" justifyContent="flex-start" alignItems="flex-end">
                        <Grid fontSize={16}>משרד המשפטים, ועדת ערר לענייני
                            קורונה- השתתפות בהוצאות קבועות</Grid>
                        <Grid>תיק מספר 64949-02-22</Grid>
                    </Grid>
                </Grid>


                
                    <Grid container xs={10} gap={1}  justifyContent="center" alignItems="center" >
                        <Grid xs={8} ><Judges /></Grid>
                        <Grid container  direction="row-reverse" >
                            {/* direction="row-reverse" כדי להחליף צדדים לא בטוח שיצטרכו את זה */}
                            <Grid xs={6} ><Prosecutor /></Grid>
                            <Grid xs={6}><Answerings /></Grid>
                        </Grid>
                    </Grid>
            


                <Grid container gap={1} xs={6}
                    direction="row-reverse"
                    justifyContent="center"
                    alignItems="flex-end">
                    <Button xs={2} variant="contained" style={{ borderRadius: 18 }} endIcon={<VideocamIcon />}> מצלמה </Button>
                    <Button xs={2} variant="contained" style={{ borderRadius: 18 }} endIcon={<MicIcon />}>מיקרופון</Button>
                    <Button xs={2} variant="contained" style={{ borderRadius: 18 }} endIcon={<PresentToAllRoundedIcon />}> שיתוף </Button>
                </Grid>
            </Grid>
        </>
    )

};


export default DiscussionScreen