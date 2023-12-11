import React from 'react'

const App = () => {
  return (
    <div>
      <nav className='bg-slate-800 text-white py-2'>
        <ul className='flex justify-end space-x-5'>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>
      <form className='border w-96 mx-auto text-center p-4 mt-20 rounded-sm'>
        <h2 className='mb-5 text-3xl'>Login Form</h2>
        <input type='text' placeholder='UserName' className='border rounded-sm outline-none p-1'/><br /><br />
        <input type='email' placeholder='Email' className='border rounded-sm outline-none p-1'/><br /><br />
        <input type='password' placeholder='Password' className='border rounded-sm outline-none p-1' /><br /><br />
        <button type='button' className='border p-1 px-2 rounded-lg bg-green-700 text-white border-1 border-black'>Login</button>
      </form>
    </div>
  )
}

export default App
