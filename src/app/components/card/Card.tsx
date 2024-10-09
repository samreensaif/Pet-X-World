import React from 'react'
import Image from 'next/image'


interface Cardprops {
product: string,
price: string,
desc:string,
img: string}

function Card(props:Cardprops) {
  return (

<>
<div className="relative max-w-xs h-[200px] rounded-2xl  shadow-lg p-6 bg-white">
  
  <p className="absolute top-3 right-3 bg-white border border-gray-300 px-3 py-1 text-lg font-bold text-gray-700 rounded-full">
    {props.price}
  </p>

  
  <div className="flex justify-left mb-4 mt-6">
    <Image src={props.img} width={30} height={30} alt="img" />
  </div>

  
  <h2 className="text-xl font-semibold mb-2 text-left">{props.product}</h2>

  
  <p className="text-gray-600 text-left">{props.desc}</p>
</div>



</>


  )
}

export default Card