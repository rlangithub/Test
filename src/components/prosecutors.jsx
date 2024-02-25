import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProsecutors } from '../store/prosecutorSlice'
import ParticipantCard from '../hooks/ParticipantCard'
const Prosecutor = () => {

    //  const dispatch = useDispatch();
    //  const { res, axiosData } = useGet({ url: 'https://localhost:7259/api/ToDo' });
    //  useEffect(() => {
    //     axiosData();
    //     dispatch(getJudges({ res: res }));
    // });
    //כן היה נראה לי לנכון לעכן את  הסטייט כי אף פעם לא כניס ידני....
    //אמורים לקבל את הנתונים ממקום מסויים.
    //הפעולה גאט מפעילה קריאת שרת ואת המידע נעדכן בסטייט.

    const prosecutors = useSelector(x => x.ProsecutorsSlice.prosecutors);
    console.log("prosecutors", prosecutors);

    return (
        <>
            <h1>in prosecutors</h1>
            {
                prosecutors.map((p) => {
                    return (
                        // <ParticipantCard props={p} />
                        <div>{p.profile}</div>
                    )
                })
            }
        </>
    )

}
export default Prosecutor;