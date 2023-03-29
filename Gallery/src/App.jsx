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
    twenty
  ];

  return (
    <div className="gallery">
      {images.map((image) => (
        <img src={image} alt="Refaced Kitchen" width="100%"/>
      ))}
    </div>
  )
}

export default App


