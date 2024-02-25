import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getJudges } from '../store/judgeSlice'
import ParticipantCard from '../hooks/ParticipantCard'
const Judges = () => {

    //  const dispatch = useDispatch();
    //  const { res, axiosData } = useGet({ url: 'https://localhost:7259/api/ToDo' });
    //  useEffect(() => {
    //     axiosData();
    //     dispatch(getJudges({ res: res }));
    // });
    //כן היה נראה לי לנכון לעכן את  הסטייט כי אף פעם לא כניס ידני....
    //אמורים לקבל את הנתונים ממקום מסויים.
    //הפעולה גאט מפעילה קריאת שרת ואת המידע נעדכן בסטייט.

    const judges = useSelector(x => x.JudgeSlice.judges);
    console.log("judges", judges);

    return (
        <>
            <h1>in Judges</h1>

            {
                judges.map((j) => {
                    return (
                        // <ParticipantCard props={j} />
                        <></>
                    )
                })
            }
        </>
    )

}
export default Judges;