import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FetchData from './FetchData'

function App() {

  return (
    <>
      <h2 className='mainHeading'>hello world</h2>
      <FetchData pokemon={"bulbasaur"}/>
    </>
  )
}

export default App
