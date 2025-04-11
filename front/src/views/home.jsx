import React from 'react'
import worldImg from '../assets/world.png';
import '../styles/home.css'
import { BetterWorld } from '../components/better_world';

export const Home = () => {


  return (
    <>
      <section className='home-container bg-cover bg-center w-full h-screen'  style={{ backgroundImage: `url(${worldImg})` }}>
        <div  className="home-text w-full h-full flex flex-col justify-center items-center">
            <div className='h-100'>
                <h1 className='home-principal-title text-white'>A NEW ERA BEGINS</h1>
            </div>
            <div className='absolute bottom-10 left-1/2 -translate-x-1/2'>
                <p className='home-text-scroll text-white'>Scroll to explorer</p>
            </div>
        </div>
        <div className='bg-white w-full h-screen'>
            <BetterWorld />
        </div>
      </section>
    </>
  )
}


