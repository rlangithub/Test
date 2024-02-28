import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProsecutors } from '../../store/prosecutorSlice'
import ContenderCard from '../card/ContenderCard'
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

    return (
        <>
            {
                prosecutors.map((p) => {
                    return (
                        <ContenderCard props={p} />
                    )
                })
            }
        </>
    )
}
export default Prosecutor;