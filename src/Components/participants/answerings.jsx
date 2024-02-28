import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAnswerings } from '../../store/answeringSlice'
import ContenderCard from '../card/ContenderCard'
const Answerings = () => {

    //  const dispatch = useDispatch();
    //  const { res, axiosData } = useGet({ url: 'https://localhost:7259/api/ToDo' });
    //  useEffect(() => {
    //     axiosData();
    //     dispatch(getJudges({ res: res }));
    // });
    //כן היה נראה לי לנכון לעכן את  הסטייט כי אף פעם לא כניס ידני....
    //אמורים לקבל את הנתונים ממקום מסויים.
    //הפעולה גאט מפעילה קריאת שרת ואת המידע נעדכן בסטייט.

    const answerings = useSelector(x => x.AnsweringsSlice.answerings);
    return (
        <>
            {
                answerings.map((j) => {
                    return (
                        <ContenderCard props={j} />
                    )
                })
            }
        </>
    )
}
export default Answerings;