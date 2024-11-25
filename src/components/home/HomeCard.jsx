import React from 'react';

const HomeCard = ({icon, imgTitle, imageDesc }) => {
  return (
    <div className='homeCardMainDiv p-5'>
      <div className='icon'>{icon}</div>
      <div className='imgTitle'>{imgTitle}</div>
      <div>{imageDesc}</div>
    </div>
  );
}

export default HomeCard;
