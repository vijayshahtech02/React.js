import React from 'react'
import Card from './Components/Card'

const App = () => {
  return (
    <div className='parent'>
   
    <Card user = "sujal" age="22" image ="https://images.unsplash.com/photo-1769006352025-1a429e69398f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Card>
    <Card user = "manisha" age = "50" image = "https://plus.unsplash.com/premium_photo-1776274754681-003f7e1c8e80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Card>
    <Card user = "papa"  age = "55" image = "https://plus.unsplash.com/premium_photo-1776274754786-5577986fedc8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Card>
   

    </div>
    
  )
}

export default App