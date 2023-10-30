import { FEATURES } from '@/constans'
import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <section className='padding-container max-container'>
<div className='  mt-20  bg-contain    flex flex-col  justify-center  lg:items-center  items-start'>
<div className='relative p-6 '>
<h1 className='  bold-40 xl:bold-64 '>Our Features 
<Image src={'/camp.svg'} alt='camp' width={50} height={50} className=' absolute -top-1  w-10 lg:w-auto  left-5'/>

</h1></div>

  <div className='  flex justify-between  items-start '>
  <div className=' hidden xl:block  w-1/3 bg-feature-bg'>
    <Image src={'/phone.png'} alt='phone' width={450} height={450} className='   rotate-12'/>
  </div>
  <div className=' flex-1  grid gap-y-10 md:grid-cols-2 md:gap-28 '>
    {
FEATURES.map((item,index)=>{
  return <div key={index} className=' flex flex-col gap-y-5 '>
    <div className=' w-fit rounded-full bg-green-50 p-4 xl:p-7'>
  <Image src={item.icon} alt='map' width={28} height={28}/>

</div>
  <h1 className=' bold-20 xl:bold-32'>{item.title}</h1>
  <p className=' text-gray-30'> {item.description}</p>
  </div>
})
    }
  </div>
  </div>
</div>
    </section>
  )
}

export default Features