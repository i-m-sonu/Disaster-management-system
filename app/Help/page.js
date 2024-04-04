import React from 'react'
import Navbar from '../pages/Navbar'

const page = () => {
  return (
   <>
   <Navbar/>
   <div className="body">

   <h1>quick help</h1>
   name: <span><input type="text" /></span>
   Ph. No: <span><input type="text" /></span>
   Address: <span><input type="text" /></span>
   <button>submit</button>

   </div>

   </>
  )
}

export default page