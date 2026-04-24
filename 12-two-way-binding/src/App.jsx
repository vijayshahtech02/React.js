import React from 'react'
import { useState } from 'react';

const App = () => {

  const [title, setitle] = useState("")


  function submitForm(elem) {
    elem.preventDefault()
    // console.log("form is Submitted..");
    // console.log(elem);
    console.log("form submited by", title);
    

   setitle("")
    
    
  }


  return (
    <div>
      <form onSubmit={submitForm}>
        
      <input  onChange={function(e) {
        setitle(e.target.value)
        
      }}  type="text" value = {title} placeholder='Enter your Name'  />
       
      <button >Submit</button>


      </form>
    
    </div>
  )
}

export default App