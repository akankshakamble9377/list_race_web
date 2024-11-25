import React from 'react'
import './Explore.css'
import ExploreCard from './ExploreCard'
import ExpImage1 from '../../assets/explore/e1.jpg'
import ExpImage2 from '../../assets/explore/e2.jpg'
import ExpImage3 from '../../assets/explore/e3.jpg'
import ExpImage4 from '../../assets/explore/e4.jpg'
import ExpImage5 from '../../assets/explore/e5.jpg'
import ExpImage6 from '../../assets/explore/e6.jpg'
import personImg from '../../assets/explore/person.png'

const Explore = () => {

  const ExploreData=[
    {imageSrc:ExpImage1,imagealt:"Exploreimage",Title:"tommy hilfinger bar",personImg:personImg,Desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua..",buttonLabel:"CloseNow",rating:"5.0",ratingLabel:"10 Ratings",price:"From 10k$ -15k$",ExploreObj:"Real Estate"},
    {imageSrc:ExpImage2,imagealt:"Exploreimage",Title:"swim and dine resort",personImg:personImg,Desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua..",buttonLabel:"CloseNow",rating:"5.0",ratingLabel:"10 Ratings",price:"From 10k$ -15k$",ExploreObj:"Real Estate"},
    {imageSrc:ExpImage3,imagealt:"Exploreimage",Title:"europe tour",personImg:personImg,Desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua..",buttonLabel:"CloseNow",rating:"5.0",ratingLabel:"10 Ratings",price:"From 10k$ -15k$",ExploreObj:"Real Estate"},
    {imageSrc:ExpImage4,imagealt:"Exploreimage",Title:"bungalow with swimming pool",personImg:personImg,Desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua..",buttonLabel:"CloseNow",rating:"5.0",ratingLabel:"10 Ratings",price:"From 10k$ -15k$",ExploreObj:"Real Estate"},
    {imageSrc:ExpImage5,imagealt:"Exploreimage",Title:"vintage car expo",personImg:personImg,Desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua..",buttonLabel:"CloseNow",rating:"5.0",ratingLabel:"10 Ratings",price:"From 10k$ -15k$",ExploreObj:"Real Estate"},
    {imageSrc:ExpImage6,imagealt:"Exploreimage",Title:"thailand tour",personImg:personImg,Desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua..",buttonLabel:"CloseNow",rating:"5.0",ratingLabel:"10 Ratings",price:"From 10k$ -15k$",ExploreObj:"Real Estate"},
   
  ]
  return (
    <div className='headingMain py-5  text-uppercase'>
        <h1 className='text-center'>explore</h1>
        <p  className='pb-4 text-center mt-5'>Explore New place, food, culture around the world and many more</p>
       <div className='ExploreMain mx-auto w-75'>
        {ExploreData.map((expData,index)=>(
          <ExploreCard className="d-block" key={index} imageSrc={expData.imageSrc} imagealt={expData.imagealt} Title={expData.Title} personImg={expData.personImg} personAlt={expData.personAlt} Desc={expData.Desc} buttonLabel={expData.buttonLabel} rating={expData.rating} ratingLabel={expData.ratingLabel} price={expData.price} ExploreObj={expData.ExploreObj}/>
        ))}
        </div>
    </div>
  )
}

export default Explore