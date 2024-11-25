import React from 'react'

const HowItWorksCard = ({icon,imgTitle,imageDesc,ButtonLabel}) => {
  return (
    <div className='HowItWorMainDiv p-4 img-thumbnail'>
        <div className='icons mx-auto'>{icon}</div>
        <div className='title py-3'>{imgTitle}</div>
        <div>{imageDesc}</div>
        <button className='border-0 my-4 px-4 py-2 text-bg-dark'>{ButtonLabel}</button>
    </div>
  )
}

export default HowItWorksCard