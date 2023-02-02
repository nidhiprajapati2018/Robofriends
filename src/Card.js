import React from 'react';


const Card = ({name, email, id})=>{
    return(
       <div className='tc bg-light-green dib br3 ma2 grow bw2 shadow-5 '>
           <img alt='robots' src = {`https://robohash.org/${id}100x100`} />
           <div>
               <h2>{name}</h2>
               <p2>{email}</p2>
           </div>
       </div>

    );
}

export default Card;