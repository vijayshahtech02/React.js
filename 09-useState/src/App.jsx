// import React from 'react'
// import { useState } from 'react'

// const App = () => {


//   const [num, setNum] = useState(10)
//   const [username, stename] = useState("vijay")
//   const [arr, setarr] = useState([10,20,30])

//   function chnageValue() {
//   // console.log("hello");
//   setNum(30)
//   stename("sujal")
  
//   setarr([40,50,60])   
//   }


//   return (
//     <div>
//       <h1>Your Number is {num}</h1>
//       <h1>Your Name is {username}</h1>
//       <h1>Your arr is {arr}</h1>
//       <button onClick={chnageValue}>click me</button>
//     </div>
//   )
// }

// export default App



import React from 'react'
import { useState } from 'react'

const App = () => {

   let [num, setnum] = useState(0)


   function increase() {
       setnum(num+1)
   }

   function decrease() {
       setnum(num-1)
   }


  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increase}>Inc</button>
      <button onClick={decrease}>Dec</button>
    </div>
  )
}

export default App