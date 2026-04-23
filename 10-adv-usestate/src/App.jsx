// import React, { useState } from 'react'


// const App = () => {

//   const [num, setnum] = useState(0)


//   function changeNum() {
//     console.log(num);
    
//     setnum(10)
//        console.log(num);
//   }

//   return (
//     <div>
//       <h1>{num}</h1>
//     <button onClick={changeNum}>Click me</button>
//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react'


// const App = () => {

//   const [num, setNum] = useState([10,20,30])


//   function changeNum() {
// const  NewNum = [...num]
// console.log(NewNum);
// NewNum.push(99)
// console.log(NewNum);
// setNum(NewNum)

// }

//   return (
//     <div>
//       <h1>{num}</h1>
//     <button onClick={changeNum}>Click me</button>
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'


// const App = () => {

//   const [num, setNum] = useState({user:"vijay", age: 22})


//   function btnClick() {
//     console.log(num);
//     setNum(prev => ({...prev, age:50}))
    
// }

//   return (
//     <div>
//       <h1>{num.user}, {num.age}</h1>
//     <button onClick={btnClick}>Click me</button>
//     </div>
//   )
// }

// export default App


import React, { useState } from 'react'


const App = () => {

  const [num, setNum] = useState(0)


  function btnClick() {
// setNum(num+1)
setNum(prev=>( prev + 1))
setNum(prev=>( prev + 1))
setNum(prev=>( prev + 1))

  
    
}

  return (
    <div>
      <h1>{num}</h1>
    <button onClick={btnClick}>Click me</button>
    </div>
  )
}

export default App
