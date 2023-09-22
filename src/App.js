

import { useState } from 'react';
import './App.css';
import { TextField,Stack,Button } from '@mui/material';
function App() {
  const [interest,setInterest] = useState(0)
  const [principle,setPrinciple] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)
  const [isprincipleValid,setIsPrincipleValid] =useState(true)
  const [israteValid,setisrateValid] = useState(true)
  const [isyearValid,setisyearValid] = useState(true)
  const handelCalculate = (e)=>{
    e.preventDefault()
    if(!principle || !rate || !year){
      alert("Please fill all the fields")
    }else{
      setInterest(principle*rate*year/100)
    }
  }
  const validateInput = (e)=>{
    
    const{value,name} = e.target
    if(!!value.match(/^[0-9]+$/)){
      if(name==="principle"){
      setPrinciple(value)
      setIsPrincipleValid(true)
    }else if(name==="rate"){
      setRate(value)
      setisrateValid(true)
    }else{
      setYear(value)
      setisyearValid(true)}
    }else{
      if(name==="principle"){
        setPrinciple(value)
        setIsPrincipleValid(false)
      }else if(name==="rate"){
        setRate(value)
        setisrateValid(false)
      }else{
        setYear(value)
        setisyearValid(false)
      }
      }if(value===""){
        if(name==="principle"){
        setPrinciple(value)
        setIsPrincipleValid(true)
      }else if(name==="rate"){
        setRate(value)
        setisrateValid(true)
      }else{
        setYear(value)
        setisyearValid(true)}
      }
    }
  

  const handleReset = ()=>{
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInterest(0)
    setIsPrincipleValid(true)
    setisrateValid(true)
    setisyearValid(true)
  }
  
  return (
    <div style={{height:'100vh'}} className='d-flex w-100 justify-content-center align-items-center bg-dark'>
      <div style={{width:'500px '}} className=' bg-light rounded p-5'>
        <div className="heading">
          <h1>Simple Calculator</h1>
          <p>Calculate your simple interest easily</p>
        </div>
        
          <div style={{height:'150px'}} className="interest-card d-flex flex-column w-100 rounded  align-items-center justify-content-center bg-warning shadow">
            <h1>₹ {' '} {interest}</h1>
            <p className='fw-bold'>Total Simple Interest</p>
          </div>
        
        <form className='mt-5 h-50'onSubmit={handelCalculate}>
        <div className='mb-3 d-flex flex-column'>
          <TextField  id="outlined-basic" label="₹ Principal amount" variant="outlined" value={principle || ""} name='principle' onChange={(e)=>validateInput(e)} />
          </div>

          {
            !isprincipleValid &&
            <div className='mb-3 text-danger'>
              *Invalid Input
            </div>
          }
          <div className='mb-3 d-flex flex-column' >
          <TextField  id="outlined-basic" label="Rate of interest(p.a) %" variant="outlined" value={rate || ""} name='rate' onChange={(e)=>validateInput(e)} />
          </div>
          {
            !israteValid &&
            <div className='mb-3 text-danger'>
              *Invalid Input
            </div>
          }
          <div className='mb-3 d-flex flex-column'>
          <TextField  id="outlined-basic" label="Time period (Yr)" variant="outlined" value={year || ""} name='year' onChange={(e)=>validateInput(e)}/>
          </div>
          {
            !isyearValid &&
            <div className='mb-3 text-danger'>
              *Invalid Input
            </div>
          }

          <Stack direction="row" spacing={2}>
          <Button type='submit' style={{width:'200px',height:'75px'}} disabled={!isprincipleValid || !israteValid || !isyearValid ?true:false} variant="contained">CALCULATE</Button>
          <Button onClick={handleReset} style={{width:'200px',height:'75px'}} variant="outlined">RESET</Button>
          </Stack>

        </form>
      </div>
    </div>
  );
}

export default App;
