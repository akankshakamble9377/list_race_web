import React from 'react'
import './HowItWork.css'
import HowItWorksCard from './HowItWorksCard';
//import blogImage3 from '../../assets/blog/b3.jpg'
import { TbBulbFilled } from "react-icons/tb";
import { FaCarRear } from "react-icons/fa6";
import { MdExploreOff } from "react-icons/md";
const HowItWork = () => {

  const imageData=[
    {icon:<TbBulbFilled size={40}/>,title:"choose what to do",description:"Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.",ButtonLabel:"Read More"},
    {icon:<FaCarRear size={40}/>,title:"find what you want",description:"Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.",ButtonLabel:"Read More"},
    {icon:<MdExploreOff size={40}/>,title:"explore amazing place",description:"Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.",ButtonLabel:"Read More"},

  ]
  return (
    <div className='headingMain py-5 text-center text-uppercase w-75 mx-auto'>
        <h1>how it works</h1>
        <p  className='pb-4 text-center mt-5'>Learn More about how our website works</p>
      <div className='HowItWorkDiv d-flex justify-content-center gap-5 p-4'> {imageData.map((imgVal,index)=>(
          <HowItWorksCard key={index} icon={imgVal.icon}  imgTitle={imgVal.title}  imageDesc={imgVal.description} ButtonLabel={imgVal.ButtonLabel} />
        ))}</div>
       
    </div>
  )
}

export default HowItWork