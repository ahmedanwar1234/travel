import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className=' mt20 flexCenter flex-col '>
<div className=' padding-container max-container w-full pb-24 '>
  <Image src={'/camp.svg'} alt='camp' width={50} height={50}/>
<p className='uppercase regular-18 -mt-1 mb-3 text-green-50 '>We are here for you</p>
<div className=' flex flex-wrap justify-between gap-5 lg:gap-10'>
  <h2 className=' bold-40 lg:bold-64 xl:max-w-[390px]'>Guide You to Easy Path
</h2>
<p className=' regular-16 text-gray-30 xl:max-w-[520px]'>Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain

</p>
</div>
</div>
<div className=' flexCenter max-container relative w-full'>


<Image src={'/boat.png'} alt='boat' width={1440} height={580} className=' w-full object-cover object-center 2xl:rounded-5xl'/>
<div className=' absolute flex bg-white py-8 pl-5 pr-7 rounded-3xl gap-3 border shadow-md md:left-[5%] lg:top-20'>

  <div className=' flex flex-col  justify-between items-center'>
<div className=' shadow-x shadow-[1px_1px_20px_2px_#A0AEC0] bg-gray-10  w-5 h-5 rounded-full flex items-center justify-center'><span className='  bg-gray-90 w-3 h-3  rounded-full'></span></div>
<div className=' flex-1 flex   flex-col justify-evenly items-center bg-gradient-to-b     from-slate-200 rounded-xl  via-slate-100 to-slate-200  w-1/2'>

{Array(6).fill(1).map((_,index)=>{
  return <div className=' w-1  h-1 bg-gray-20 rounded-full'></div>

})}
{Array(4).fill(1).map((_,index)=>{
  return <div className=' w-1  h-1 bg-green-50 rounded-full'></div>

})}

</div>
<div className=' shadow-x shadow-[1px_1px_20px_2px_#48bb78]  bg-gray-10  w-5 h-5 rounded-full flex items-center justify-center'><span className='  bg-green-50 w-3 h-3  rounded-full'></span></div>
  </div>
<div className=' flexBetween gap-y-6 flex-col'>
  <div className=' flex w-full flex-col '>
    <div className=' flexBetween w-full'>
      <p className=' regular-16 text-gray-20 '>Destination</p>
      <p className=' bold-16 text-green-50'>48 min</p>
      
    </div>
    <p className=' bold-20 mt-2'>Aguas Calientes</p>
  </div>


  <div className=' flex w-full flex-col '>
      <p className=' regular-16 text-gray-20 '>Start track</p>
      
    <h4 className=' bold-20 mt-2 whitespace-nowrap'>Wonorejo Pasuruans</h4>
  </div>
</div>
</div>
</div>


    </section>
  )
}

export default Guide