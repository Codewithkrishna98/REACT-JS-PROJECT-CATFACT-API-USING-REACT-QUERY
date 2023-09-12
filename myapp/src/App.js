import { useState } from 'react';
import './App.css';
import Axios from 'axios'


function App() {
const [ urName,  seturName]= useState("")
const [fetchData , setfetchData]=useState (null)

const fetchAge =()=>{
Axios.get (  `https://api.agify.io/?name=${urName}`).then ((res)=>{
  setfetchData(res.data)
});
};
  return (
    <>
    <div className="App">
      <input       placeholder='Ex. krishna' onChange={(event)=>{
seturName(event.target.value)

      }}  />
<div>
<button onClick={fetchAge}      >Predict Age </button>
</div>
<h1>Name: {fetchData?.name}</h1>
<h1>Age: {fetchData?.age}</h1>
     
    </div>
    </>
  );
  
}

export default App;
