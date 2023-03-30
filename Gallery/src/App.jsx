import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import one from './images/1.png'
import two from './images/2.png'
import three from './images/3.png'
import four from './images/4.png'
import five from './images/5.png'
import six from './images/6.png'
import seven from './images/7.png'
import eight from './images/8.png'
import nine from './images/9.png'
import ten from './images/10.png'
import eleven from './images/11.png'
import twelve from './images/12.png'
import thirteen from './images/13.png'
import fourteen from './images/14.png'
import fifteen from './images/15.png'
import sixteen from './images/16.png'
import seventeen from './images/17.png'
import eighteen from './images/18.png'
import nineteen from './images/19.png'
import twenty from './images/20.png'
import twentyone from './images/21.png'
import twentytwo from './images/22.png'
import twentythree from './images/23.png'
import twentyfour from './images/24.png'
import twentyfive from './images/25.png'
import twentysix from './images/26.png'
import twentyseven from './images/27.png'
import twentyeight from './images/28.png'
import twentynine from './images/29.png'
import thirty from './images/30.png'
import thirtyone from './images/31.png'
import thirtytwo from './images/32.png'
import thirtythree from './images/33.png'
import thirtyfour from './images/34.png'
import thirtyfive from './images/35.png'
import thirtysix from './images/36.png'
import thirtyseven from './images/37.png'
import thirtyeight from './images/38.png'
import thirtynine from './images/39.png'
import forty from './images/40.png'
import fortyone from './images/41.png'
import fortytwo from './images/42.png'
import fortythree from './images/43.png'
import fortyfour from './images/44.png'
import fortyfive from './images/45.png'
import fortysix from './images/46.png'
import fortyseven from './images/47.png'
import fortyeight from './images/48.png'
import fortynine from './images/49.png'
import fifty from './images/50.png'

import header from './images/header.png'



import React from 'react';

function App() {
  
  const images = [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
    twelve,
    thirteen,
    fourteen,
    fifteen,
    sixteen,
    seventeen,
    eighteen,
    nineteen,
    twenty,
    twentyone,
    twentytwo,
    twentythree,
    twentyfour,
    twentyfive,
    twentysix,
    twentyseven,
    twentyeight,
    twentynine,
    thirty,
    thirtyone,
    thirtytwo,
    thirtythree,
    thirtyfour,
    thirtyfive,
    thirtysix,
    thirtyseven,
    thirtyeight,
    thirtynine,
    forty,
    fortyone,
    fortytwo,
    fortythree,
    fortyfour,
    fortyfive,
    fortysix,
    fortyseven,
    fortyeight,
    fortynine,
    fifty
  ];

  const reviews = [
    {
      reviewer: "Christopher A.",
      review: "David, the owner of Atlantic Cabinet Refacing, did an EXCELLENT job re-facing my old cabinets. He gave me a time line for installation and it was exactly what he said. The cabinets doors are custom and high quality. David's workmanship is outstanding. He works with and coordinated the granite countertop with Ripano Stoneworks and they too were excellent. If you need a refacing on your cabinets I highly recommend Atlantic Cabinet Re-Facing."
    },
    {
      reviewer: "Linda M.",
      review: "From my first call with Dave until I paid him the last installment, he was always on time, communicated often, and most of all, knows his craft! I am so happy how my kitchen cabinets came out. He used great quality cabinets and I would recommend him hands down. I had received a quote from Hone Depot, they were going to use laminate cabinet doors. The price I was quoted did not seem right, it was close to getting a brand new kitchen. When I called Dave, he not only came in 6K less, but the cabinets are maple wood! They are top of the line. Thank you Dave!"
    }
  ]



  return (
    <>
    <div className="container">
      <img src={header} height="100px" width="300px"></img>
    </div>
    <div className="gallery">
      {images.map((image) => (
        <img src={image} alt="Refaced Kitchen" width="100%" />
      ))}
    </div>
    <hr></hr>
    <div className="reviews">
      <h2>Reviews</h2>
      {reviews.map((r) => (
        <>
          <blockquote>"{r.review}"</blockquote>
          <cite>- <i>{r.reviewer}</i></cite>
        </>
      ))}
    </div>
    </>
  )
}

export default App


    {/* Left over from when creatin the header */}
    {/* <div className="container">
      <div className="header">
        <div className="leftSide">
          <div className="blackBox"></div>
          <h1>ACR</h1>
          <h5>Since 1985</h5>
          <div className="border">&nbsp;</div>
        </div>
        <div className="rightSide">
          <div className="locationInfo">Burlington, MA - 781-221-0334</div>
          <div className="companyName">Atlantic Cabinet Refacing</div>
          <div className="numberRefaced">Over 1500 Kitches Refaced</div>
        </div>
      </div>
    </div> */}



          //Messing with opacity when scrolling into screen
  // const imageElements = document.querySelectorAll('.gallery img');

  // function checkScroll() {
  //   const windowHeight = window.innerHeight;
  //   const scrollTop = window.scrollY;
    
  //   imageElements.forEach((img) => {
  //     const imgTop = img.offsetTop+ 50;
  //     const imgHeight = img.offsetHeight;
      
  //     if (imgTop < scrollTop + windowHeight - imgHeight * 0.2) {
  //       // set opacity to a value between 0.2 and 1 based on how far the element is scrolled into view
  //       img.style.opacity = (scrollTop + windowHeight - imgTop) / (imgHeight * 0.8);
  //     }
  //   });
  // }
  
  // window.addEventListener('scroll', checkScroll);