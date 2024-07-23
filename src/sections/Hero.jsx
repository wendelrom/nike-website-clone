import { useState } from 'react';
import Button from '../components/Button'
import ShoeCard from '../components/ShoeCard';
import { arrowRight } from '../assets/icons'
import {shoes, statistics } from '../constants'
import { bigShoe1 } from '../assets/images' 

const Hero = () => {

  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section id='home' className="w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container p-2">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className='text-xl font-montserrat text-coral-red'>Our Summer Collection</p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading:-[82px] font-bold z-10'>
          <span className=' xl:whitespace-nowrap relative pr-10'>The New Arrival</span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Pasifix </span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-lg -leading-8 mt-6 mb-14'>Discovers stylish Pasifix arrivals, quality comfort, and innovation for your active life.</p>
        <Button  label="shop now" iconURL={arrowRight}/>

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map(stat => (
            <div key={stat.label}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <h2 className='leading-7 font-montserrat text-slate-gray'>{stat.label}</h2>
            </div>
          ))}
        </div>
      </div>  
      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img src={bigShoeImg} alt="shoe" width={610} height={500} className='object-contain relative z-10'/>
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
        {shoes.map(shoe => (
          <div key={shoe}>
            <ShoeCard 
              imgURL={shoe}
              changeBigShoesImage ={shoe => {
                setBigShoeImg(shoe)
              }}
              bigShoeImg={bigShoeImg}
            />
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}

export default Hero