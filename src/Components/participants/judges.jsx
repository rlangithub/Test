import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getJudges } from '../../store/judgeSlice'
import JudgeCard from '../card/judgeCard'

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
    console.log(judges.length);
    return (
        <>
            {
                judges.map((j) => {
                    return (
                        <JudgeCard prop1={j} prop2={judges.length} />
                    )
                })
            }
        </>
    );
}
export default Judges;