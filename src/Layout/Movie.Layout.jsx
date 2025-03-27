import react from 'react';

const MovieLayoutHoc=(Component)=>({...props})=>{
    return (
        <div><Component {...props}/></div>
    )
}

export default MovieLayoutHoc;