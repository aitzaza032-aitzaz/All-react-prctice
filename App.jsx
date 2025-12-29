
import {  useState, useCallback } from 'react'
import './App.css'

function App() {
  const [num,setnum]=useState(0);
  const [name,setname]=useState("");
  const [pw,setpw]=useState(0)
  const [color,setcolor]=useState("white");
  const [oo,setoo]=useState("hi")

  function Increase()
  {
    setnum(num+2);
  }
    function decrease()
  {
    setnum(num-2);
  }
   function mm()
   {
    alert("hi")
    }

    //useCallback project
    
   const [text,settext]=useState(" ")
 const [count,setcount]=useState(0)


const incr= useCallback(()=>
{
  setcount(count+1);


},[count])  

   console.log("App renderd")




  return (
    <>
    <div style={{backgroundColor:color}}  >
   
    <h1> {num}</h1>
  <button onClick={Increase}>Incremenet</button>
    <button onClick={decrease}>decremenet</button>

    <h1> {name}   & {pw}  </h1>
      
    <div>
      <div>
      <label htmlFor='name'>Name</label>
      </div>
      <input type='text' id='name' placeholder='enter your name' onChange={(e)=>setname(e.target.value)}  ></input>
    </div>
    <input type='range' id='range' onChange={(e)=>setpw(e.target.value)} ></input>


    
     <button onClick={()=>setcolor("yellow")} >yellow</button>
      <button onClick={()=>setcolor("red")} >red</button>
      <button onClick={()=>setcolor("blue")} >blue</button>
       <button onClick={()=>setcolor("pink")} >pink</button>
      <button onClick={mm} >Click Me</button>

      {/*  useCallback project */}

         <h2>   i am  aitzaz ahmad  {count}   </h2>
    <input type='text' placeholder='enter here ' value={text} onChange={(e)=>settext(e.target.value)} />

      <button onClick={incr}>++++</button> 

      <p>   You can see app rendring in console</p>



    </div>
    </>
  )
}

export default App
