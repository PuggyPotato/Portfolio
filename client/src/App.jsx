import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [left,setLeft] = useState(0);
  const [top,setTop] = useState(0);

  useEffect(() =>{
    document.addEventListener("keydown",handleKeyDown);

    function handleKeyDown(event){
      if(event.key == "w"){
        setTop(top =>top - 20);
      }else if(event.key == "s"){
        setTop(top =>top + 20);
      }else if(event.key == "a"){
        setLeft(left =>left - 20)
      }else if(event.key == "d"){
        setLeft(left =>left + 20)
      }
      
  }
  return() =>{
        document.removeEventListener("keydown",handleKeyDown)
      }
  },[])

  


  return (
    <>
      <div id='container'>
        <div id='character' style={
          {
            left:`${left}px`,
            top:`${top}px`
            }}>

        </div>
        <div id='map'>

        </div>
        <div id='aboutMe'>
          <h1 id='name'>Tang Qing Yau</h1>
          <h3 id='title'>Full-Stack Developer / Web3 Developer</h3>
          <p id='bio'>Bored.</p>
          <a href='/journey'>Check My Journey</a>
        </div>
        <div id='contactMe'>

        </div>
        <div id='journey'>

        </div>
        <div id='skills'>
            <p>Javascript</p>
            <p>TypeScript</p>
            <p>Golang</p>
            <p>C++</p>
        </div>
        <div id='projects'>
          <p>Telegram Gold Tracker / Silver Tracker</p>
          <p>Marketplace With MERN</p>
          <p>Peanut Butter</p>

        </div>
      </div>
    </>
  )
}

export default App
