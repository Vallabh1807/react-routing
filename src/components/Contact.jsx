import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className="w-1/4 m-auto mt-10">
      <div className="flex items-center justify-center flex-col bg-rose-300 p-5 rounded-xl">
        <h1 className="text-4xl tracking-tighter m-3">Contact</h1>
        <p className="text-sm tracking-tighter m-3 text-center  text-zinc-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          quibusdam ad veniam, quam ex enim, consequuntur vitae cumque cum dolor
          culpa beatae delectus aliquid. Eos assumenda quo ducimus accusantium
          quod?
        </p>
        <button className="bg-sky-500 px-2 py-1 rounded-xl text-stone-100 cursor-pointer">Explore more</button>
        <div className='flex gap-10 mt-3'>
          <Link className='bg-red-400 px-2 py-1 rounded-md text-white hover:scale-95'  to="/contact/john">John</Link>
          <Link className='bg-red-400 px-2 py-1 rounded-md text-white hover:scale-95' to="/contact/ayush">Ayush</Link>
          <Link className='bg-red-400 px-2 py-1 rounded-md text-white hover:scale-95' to="/contact/vallabh">Vallabh</Link>
        </div>
      </div>
    </div>
  )
}

export default Contact