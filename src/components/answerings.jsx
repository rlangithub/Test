import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAnswerings } from '../store/answeringSlice'
import ParticipantCard from '../hooks/ParticipantCard'
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
    console.log("answerings", answerings);

    return (
        <>
            <h1>in answerings</h1>

            {
                answerings.map((j) => {
                    return (
                        // <ParticipantCard props={j}/>
                        <div>{j.profile}</div>
                    )
                })
            }
        </>
    )

}
export default Answerings;