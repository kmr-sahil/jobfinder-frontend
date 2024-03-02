import React from 'react'
import Form from '../components/Form'

function PostJob() {
  return (
    <div className='w-[42rem] mx-auto my-[2rem] flex flex-col items-start justify-center gap-[1rem] font-thin'>
        
            <h1 className='text-[2rem]'>Hire the best. Share your job post with thousands of job seekers.</h1>

            <div className='flex flex-col'>
                <h3 className='text-[1.2rem]'>Company Details</h3>
                <p>We will automatically create a company profile with all your job listings.</p>
            </div>

            <Form/>

    </div>
  )
}

export default PostJob