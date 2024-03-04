import React, { useState } from 'react'
import axios from 'axios'

function Dashboard() {

  const [email, setEmail] = useState('')

  const onSubmit = async() => {
      try {
        const response = await axios.post("http://localhost:3000/api/v1/users-list", {email: email})
        console.log(response)
      } catch (error) {
        console.log(error)
      }
  }

  return (
    <div className='relative w-[42rem] mx-auto flex justify-between font-thin py-[2rem]'>

      <input type="text"
              placeholder='email'
              onChange={(e) => setEmail(e.target.value)} 
      />

       <button onClick={onSubmit}>Submit</button> 

        <h1>Welcome Smith</h1>
    </div>
  )
}

export default Dashboard