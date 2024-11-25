import React from 'react';
import './Home.css';
import HomeCard from './HomeCard';
import { CiLocationOn } from "react-icons/ci";
import { FaHotel } from "react-icons/fa6"; 
import { FaCarSide } from "react-icons/fa";
import { GiHealthPotion } from "react-icons/gi";
import { LiaHotelSolid } from "react-icons/lia";
const Home = () => {
  const HomeCardData = [
    { icon: <CiLocationOn size={50}  />,title: "Location", description: "150 listings", ButtonLabel: "Read More" },
    { icon: <FaHotel size={30} />, alt: "Hotel Icon", title: "Hotel", description: "100 listings", ButtonLabel: "Read More" },
    { icon: <GiHealthPotion size={50}  />, alt: "Restaurant Icon", title: "Restaurant", description: "200 listings", ButtonLabel: "Read More" },
    {icon: <LiaHotelSolid size={50}  />, alt: "Cafe Icon", title: "Cafe", description: "80 listings", ButtonLabel: "Read More" },
    {  icon: <FaCarSide size={50}  />,alt: "Park Icon", title: "Park", description: "50 listings", ButtonLabel: "Read More" },
  ];

  return (
    <>
      <div className='homeMainDiv text-center'>
        <h1 className='d-inline-flex icon-link text-uppercase text-white w-75'>
          Best Place to Find and Explore All That You Need
        </h1>
        <p className='pb-4 text-center mt-5 text-white' style={{ fontSize: "25px" }}>
          Find the Best Place, Restaurant, Hotel, Real Estate, and Many More Things in Just One Click
        </p>
      </div>
      <div className='d-flex mx-auto justify-content-center homeDiv gap-4 text-center'>
        {HomeCardData.map((homeVal, index) => (
          <HomeCard
            key={index}
            icon={homeVal.icon} 
            imgTitle={homeVal.title}
            imageDesc={homeVal.description} className=" text-center"
          />
        ))}
      </div>
    </>
  );
};

export default Home;
