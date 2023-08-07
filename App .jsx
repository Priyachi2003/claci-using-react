import React, { useState } from "react";


function App() {
const[val1,setval1]=useState("");
const[val2,setval2]=useState("");
const[ans,setans]=useState("");
const[sign,setsign]=useState("+");

  var anss;
function handleadd(){
anss=parseFloat(val1)+parseFloat(val2)
setans(anss)
setsign("+")
}
function handlesub(){
  anss=parseFloat(val1)-parseFloat(val2)
  setans(anss)
  setsign("-")
  }
  function handlemul(){
    anss=parseFloat(val1)*parseFloat(val2)
    setans(anss)
    setsign("*")
    }
    function handlediv(){
      anss=parseFloat(val1)/parseFloat(val2)
      setans(anss)
      setsign("/")
      }
function ansval1(event){
  setval1(event.target.value);
}
function ansval2(event){
  setval2(event.target.value);
}
function submitt(event){
  event.preventDefault()
}


  return (
    <div>
      <form onSubmit={submitt}>
        
        <input type="number" placeholder="enter num1" value={val1} onChange={ansval1} />
        <input type="number" placeholder="enter num2" value={val2} onChange={ansval2} />
        <br/>
        <br/>
        <button onClick={handleadd} >+</button>
        <button onClick={handlesub}>-</button>
        <button onClick={handlemul}>*</button>
        <button onClick={handlediv}>/</button>
        <br/>
        <div>Ans:{ans}</div>
      </form>
    </div>
  );
}

export default App;
