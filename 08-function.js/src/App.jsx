import React from 'react'

const App = () => {

  const inputChng = (elem) => {
    console.log(elem,"hi");
    
      
  }
   
  return (
    <div>
        <input onChange={function(e) {
            inputChng(e.target)
             
          
        }} type="text" placeholder='Enter the username' />
  

    </div>
  )
}

export default App




// import React from 'react'

// const App = () => {
  

   
//   return (
//     <div>
//       <input onChange={function(e) {

//          console.log(e.target.value)

//       }} type="text" name="" id="" placeholder='Enter Name' />
//     </div>
//   )
// }

// export default App