import react from 'react';
import DefaultLayoutHoc from '../Layout/Default.Layout';
import { useParams } from "react-router-dom";

const PlayPage=()=>{
    return (
        <div>in PlayPage</div>
    )
}

export default DefaultLayoutHoc(PlayPage);