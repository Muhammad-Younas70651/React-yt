import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card 
        user="Muhammad Younas" 
        age={25} 
        img="https://plus.unsplash.com/premium_photo-1771254265971-12f3a173c0c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyM3xDRHd1d1hKQWJFd3x8ZW58MHx8fHx8" 
      />
      
      <Card user="Ali Khan" age={30} img = 'https://plus.unsplash.com/premium_photo-1770565049381-2be12eb3b85a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0MXxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8'/>
     <Card user="Ahmed Ali" age={29} img = 'https://plus.unsplash.com/premium_photo-1682145730713-34bba6d3d14a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQyfHx8ZW58MHx8fHx8'/>
    </div>
  )
}

export default App