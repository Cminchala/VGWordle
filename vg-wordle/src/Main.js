import React from 'react';
import {Routes, Route } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import "./Main.css"



const top10Games = [
  { label: 'The Legend of Zelda: Ocarina of Time', year: 1998 },
  { label: "Tony Hawk's Pro Skater 2", year: 2000 },
  { label: 'Grand Theft Auto IV', year: 2008 },
  { label: 'Soul Calibur', year: 1999 },
  { label: 'Super Mario Galaxy', year: 20007 },
  { label: 'Super Mario Galaxy 2', year: 2010 },
  { label: "Red Dead Redemption 2", year: 2018 },
  { label: 'Grand Theft Auto V', year: 2014 },
  { label: 'Persona 5 Royal', year: 2022 },
  { label: 'Disco Elysium', year: 2021 },
];

const ComboBox = () => (
<Autocomplete 
  className='text'
  disablePortal
  id="combo-box-demo"
  options={top10Games}
  sx={{ width: 400 }}
  renderInput={(params) => <TextField {...params} label="Games" />}
/>
)


const gameCatalog = ["The Legend of Zelda: Ocarina of Time",  //Array without labels 
"Tony Hawk's Pro Skater 2",
"Grand Theft Auto IV",
"Soul Calibur",
"Super Mario Galaxy",
"Super Mario Galaxy 2",
"Red Dead Redemption 2",
"Grand Theft Auto V",
"Persona 5 Royal",
"Disco Elysium"
];
let gamePrint = [];
let name = gameCatalog[Math.floor(Math.random() * 10)]; //Random 

for(let i = 0; i < name.length;i++){ // pushes to the new array 
  gamePrint.push(<input type= "text" maxlength = "1"/>)
}







const IfTrue = () => { // 

  let arr = document.getElementsByTagName("input");
  let string = "";
  for(let i = 0; i < arr.length;i++){//adds player input into one whole string
     
      string += arr[i].value;
  }
  if(string === name){
    return alert("Correct")
  }
    else{
      return alert("Incorrect")
    }
    // return alert(string) for testing purposes comment out the top 


}


const Home = () => (
  
  <>
  <div className='home'>
    <h1>Guess The Game</h1>
    <ComboBox />
  </div>
  <div className = "game">
  <h2 className='name'>Testing word {name} Note press space bar where box is empty</h2>
  <br/> <br />
  
  <form align ="center" className = "tree">
  
    {gamePrint}
    <button className ="g" onClick={IfTrue}>Verify</button>
    <br/> <br />
    {gamePrint}
    <button className ="g" onClick={IfTrue}>Verify</button>
    <br/> <br />
    {gamePrint}
    <button className ="g" onClick={IfTrue}>Verify</button>
    <br/> <br />
    {gamePrint}
    <button className ="g" onClick={IfTrue}>Verify</button>
    <br/> <br />
    {gamePrint}
    <button className ="g" onClick={IfTrue}>Verify</button>
  </form> 

  

  
  </div>
</>
);



const Catalog = () => (
    <div className='catalog'>
      <h1>Catalog</h1>
    </div>
);
// const GameTest = () => ( //also for testing purposes but must be changed completely 
//   <div className= 'game'> 
//       <form align ="center" className = "tree">
//     {gamePrint}
//     <button className ="g">Verify</button>
//   </form> 
//   <form align ="center" className = "tree">
//     {gamePrint}
//     <button className ="g">Verify</button>
//   </form> 
//   <form align ="center" className = "tree">
//     {gamePrint}
//     <button className ="g">Verify</button>
//   </form> 
//   <form align ="center" className = "tree">
//     {gamePrint}
//     <button className ="g">Verify</button>
//   </form> 
//   <form align ="center" className = "tree">
//     {gamePrint}
//     <button className ="g">Verify</button>
//   </form> 
  
//   </div>

// )

const Main = () => (
  <Routes>
    <Route end path='/' element={<Home />}></Route>
    <Route end path='/catalog' element={<Catalog />}></Route>
    {/* <Route end path='/game' element = {<GameTest />}></Route> */}
  </Routes>
);

export default Main;