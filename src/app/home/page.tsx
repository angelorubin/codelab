"use client"
import { useState } from 'react';
import { space_grotesk, inter } from '@/fonts'
import CustomLike from "../components/like";

export default function Home() {
  let [status, setStatus] = useState(false)

  const handleCustomLikeClick = () => {
    console.log('clicked')
    setStatus(!status)
  }

  return (
    <div className="flex flex-col h-screen">

      <div className="flex flex-col gap-3 bg-gray-900 m-h-1/4">
        <div className='flex p-4 mt-4 w-full items-center justify-center'>
          <span className={`${space_grotesk.className} font-medium sm:font-medium md:font-medium text-primary text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl`}>Code</span>
          <span className={`${space_grotesk.className} text-white text-3xl font-medium sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl`}>Lab</span>
        </div>

        <div className='flex flex-col items-center justify-center mb-8'>
          <input className={`${inter.className}text-white xs: w-11/12 sm:w-11/12 md:w-3/4 lg:w-3/4 xl:w-3/4 2xl:3/4 bg-gray-700 rounded p-2`} placeholder='Pesquisar no bing' />
        </div>
      </div>

      <div className="flex flex-col items-center bg-gray-800 h-screen p-5 gap-5">
        <div className='flex flex-col w-full sm:w-full md:w-3/4 lg:w-3/4 xl:w-3/4 2xl:3/4 gap-4 border-2 rounded-lg p-5 hover:border-primary bg-gray-800'>
          <div className='flex'>
            <div className='flex flex-1'>
              <p className={`${inter.className} font-medium text-sm`}>27 de ago. de 2024</p>
            </div>

            <div className="flex flex-1 items-center justify-end">
              <CustomLike color="#E07B67" iconStatus={status} onClick={handleCustomLikeClick} />
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <h1 className={`${space_grotesk.className} font-medium text-xl`}>O que é linguagem de programação? Conheça as principais</h1>
            <p className={`${inter.className} font-medium text-sm`}>
              Uma das mais populares vertentes da tecnologia da informação, a área de programação segue
              tendo muita demanda de trabalho justamente pela velocidade com que dispositivos
              tecnológicos vêm avançando.
            </p>
          </div>
        </div>

        <div className='flex flex-col w-full sm:w-full md:w-3/4 lg:w-3/4 xl:w-3/4 2xl:3/4 gap-4 border-2 rounded-lg p-5 hover:border-primary bg-gray-800'>
          <div className='flex'>
            <div className='flex flex-1'>
              <p className={`${inter.className} font-medium text-sm`}>27 de ago. de 2024</p>
            </div>

            <div className="flex flex-1 items-center justify-end">
              <CustomLike color="#E07B67" iconStatus={status} onClick={handleCustomLikeClick} />
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <h1 className={`${space_grotesk.className} font-medium text-xl`}>O que é linguagem de programação? Conheça as principais</h1>
            <p className={`${inter.className} font-medium text-sm`}>
              Uma das mais populares vertentes da tecnologia da informação, a área de programação segue
              tendo muita demanda de trabalho justamente pela velocidade com que dispositivos
              tecnológicos vêm avançando.
            </p>
          </div>
        </div>

        <div className='flex flex-col w-full sm:w-full md:w-3/4 lg:w-3/4 xl:w-3/4 2xl:3/4 gap-4 border-2 rounded-lg p-5 hover:border-primary bg-gray-800'>
          <div className='flex'>
            <div className='flex flex-1'>
              <p className={`${inter.className} font-medium text-sm`}>27 de ago. de 2024</p>
            </div>

            <div className="flex flex-1 items-center justify-end">
              <CustomLike color="#E07B67" iconStatus={status} onClick={handleCustomLikeClick} />
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <h1 className={`${space_grotesk.className} font-medium text-xl`}>O que é linguagem de programação? Conheça as principais</h1>
            <p className={`${inter.className} font-medium text-sm`}>
              Uma das mais populares vertentes da tecnologia da informação, a área de programação segue
              tendo muita demanda de trabalho justamente pela velocidade com que dispositivos
              tecnológicos vêm avançando.
            </p>
          </div>
        </div>

      </div>

    </div>
  )
}
