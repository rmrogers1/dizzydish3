import React from 'react';
import './App.css';
import { useState } from 'react';

const foodArray = ['Pizza','Sushi','Burgers','Thai','Tacos','Pancakes','Tequila','Worth Wild'];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function Display() {
  
  alert(foodArray[getRandomInt(8)]);

}



const ImageDisplay = () => {
  const imageUrl = 'https://imagesreact.s3.amazonaws.com/IMG_8655+(1).jpg';
  const myImageStyle = { width: '300px', height: '300px' };

  return (
    <div className="App">
      <header className="App-header">
      <center><h1>Dizzy Dish</h1></center>
        <img style={myImageStyle} className="App-logo" src={imageUrl} alt="Image" />
        <button type="button" variant="outlined" onClick={Display} className="App-button">What Should We Eat?</button>
        <br></br>
        <label className="App-food" >{foodArray[getRandomInt(8)]}</label>

      </header>
      
      
    </div>
  )  
}

export default ImageDisplay;
