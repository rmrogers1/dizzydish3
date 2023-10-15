import React from 'react';
import './App.css';

const foodArray = ['Pizza','Sushi','Burgers','Thai','Tacos','Pancakes','Tequila','Worth Wild'];
//const listItems = foodArray.map((food) =>
//  <li>{food}</li>
//);
//const randomFood = foodArray.length;
//const theFood = Math.random(5);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


const ImageDisplay = () => {
  const imageUrl = 'https://imagesreact.s3.amazonaws.com/IMG_8655+(1).jpg';
  const myImageStyle = { width: '300px', height: '300px' };

  return (
    <div className="App">
      <header className="App-header">
      <center><h1>Dizzy Dish</h1></center>
      <br></br>
        <img style={myImageStyle} className="App-logo" src={imageUrl} alt="Image" />
        <h2 className="App-food" >{foodArray[getRandomInt(8)]}</h2>
      </header>
      
      
    </div>
  )  
}





//export default withAuthenticator(App);
export default ImageDisplay;
