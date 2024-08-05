import React from 'react'

const Navbar = () => {
  return (
    <div className='flex py-3 flex-wrap justify-sround'>
     <h1 className='text-lg font-semibold'>Todo App  </h1>
     <ul className='flex gap-[40px] text-m'></ul>
      <li>Home</li>
      <li>Products</li>
      <li>About</li>
      <li>Contacts</li>
    </div>
  )
}

export default Navbar