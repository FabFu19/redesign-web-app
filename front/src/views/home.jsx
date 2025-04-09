import React from 'react'
import worldImg from '../assets/world.png';
import '../styles/home.css'

export const Home = () => {
//   const [count, setCount] = useState(0)

  return (
    <>
      <div className='home-container'>
        <div  className="bg-cover bg-center w-full h-screen" style={{ backgroundImage: `url(${worldImg})` }}></div>
      </div>
    </>
  )
}


