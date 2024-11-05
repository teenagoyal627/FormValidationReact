import React from 'react'
import Header from './Components/Header'
import Login from './Components/Login'
import Signup from './Components/Signup'

const App = () => {
  return (
   <>
    <Header/>
    <main>
      <Login/>
      <Signup/>
    </main>
   </>
  )
}

export default App
