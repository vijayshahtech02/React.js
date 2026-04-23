import React from 'react'

const Card = (props) => {
    
    console.log(props.user, props.age, props.image);
    

    
  return (
    <div>
        
     <div className='card'>
       <img src={props.image} alt="" />
      <h1>{props.user}, {props.age}</h1>
     
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, similique!</p>
      <button>View Profile</button>
    </div>
    
    </div>
  )
}

export default Card