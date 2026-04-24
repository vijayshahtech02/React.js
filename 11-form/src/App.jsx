import React from 'react'

const App = () => {

function submitHandler(elem) {
  elem.preventDefault()
  //  console.log("Form submitted");
   console.log(elem);
   
}

  return (
    <div>
      <form onSubmit={function(e) {
            submitHandler(e);
      }} >
        <input type="text" placeholder='Enter Username' />
      
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App