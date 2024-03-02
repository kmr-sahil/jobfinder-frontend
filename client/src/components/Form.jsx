import React from 'react'

function Form() {
  return (
    <>
       <div className='flex flex-wrap w-[100%] justify-between gap-[1rem]'>

            <div className='flex flex-col w-[40%] gap-[0.5rem]'>
                <label htmlFor="companyName">Company Name</label>
                <input className='w-[100%] border-[2px] rounded-md px-[1rem] py-[0.5rem] border-zinc-600' type="text" placeholder='Pied Piper' />
            </div>

            <div className='flex flex-col w-[40%] gap-[0.5rem]'>
                <label htmlFor="companyWebsite">Company Website</label>
                <input className='w-[100%] border-[2px] rounded-md px-[1rem] py-[0.5rem] border-zinc-600' type="text" placeholder='https://:abc.com' />
            </div>

            <div className='flex flex-col w-[100%] gap-[0.5rem]'>
                    <label htmlFor="companyLogo">Logo</label>
                    <input type="file" name="" id="" />
            </div>

            <hr className='border-[1px] border-zinc-200 w-[100%]' />

            <div className='flex flex-col w-[100%] rounded-md my-[1rem]'>
                <h3 className='text-[1.2rem]'>Job Details</h3>
                <p>Please be as detailed as possible describing the job opening.</p>
            </div>

            <div className='flex w-[100%] gap-[0.5rem] justify-between'>

                   <div className='w-[65%] flex flex-col gap-[0.5rem]'>
                        <label htmlFor="jobTitle">Job Title</label>
                        <input className='w-[100%] border-[2px] rounded-md px-[1rem] py-[0.5rem] border-zinc-600' type="text" placeholder='Full STack SOftware Engineer' />
                   </div>

                   <div className='w-[32%] flex flex-col gap-[0.5rem] '>
                        <label htmlFor="jobTitle">Commitment</label>
                        <select name="commitment" id="lang" className='w-[100%] border-[2px] rounded-md px-[1rem] py-[0.5rem] border-zinc-600'>
                            <option value="javascript">FullTime</option>
                            <option value="php">Internship</option>
                            <option value="java">Partnership</option>
                            <option value="golang">Contractor</option>
                        </select>
                   </div>
            </div>

            <div className='flex w-[100%] gap-[0.5rem] justify-between'>

                <div className='w-[65%] flex flex-col gap-[0.5rem]'>
                     <label htmlFor="jobTitle">Primary Location</label>
                     <input className='w-[100%] border-[2px] rounded-md px-[1rem] py-[0.5rem] border-zinc-600' type="text" placeholder='Sillicon Valley' />
                </div>

                <div className='w-[32%] flex flex-col gap-[0.5rem] '>
                     <label htmlFor="jobTitle">Employees may work remotely</label>
                     <select name="commitment" id="lang" className='w-[100%] border-[2px] rounded-md px-[1rem] py-[0.5rem] border-zinc-600'>
                         <option value="javascript">Yes</option>
                         <option value="php">No</option>
                     </select>
                </div>

            </div>

            <div className='flex flex-col w-[100%] gap-[0.5rem]'>
                <label htmlFor="companyWebsite">Application URL or Public Email</label>
                <input className='w-[100%] border-[2px] rounded-md px-[1rem] py-[0.5rem] border-zinc-600' type="text" placeholder='jobs@company.com' />
            </div>

            <div className='flex flex-col w-[100%] gap-[0.5rem]'>
                <label htmlFor="jobDesc">Job Description</label>
                <textarea id="jobDesc" cols="30" rows="10" 
                          className='w-[100%] border-[2px] rounded-md px-[1rem] py-[0.5rem] border-zinc-600'
                          placeholder='The Full Stack Software Engineer will contribute to the development and optimization of our proprietary compression software. The ideal candidate will have strong experience with Python, Go, and distributed systems. They will be responsible for writing clean, efficient code and contributing to various stages of the software development lifecycle. Experience with machine learning algorithms is a plus.'
                ></textarea>
            </div>

            <hr className='border-[1px] border-zinc-200 w-[100%]' />

            <div className='flex flex-col w-[100%] rounded-md my-[1rem]'>
                <h3 className='text-[1.2rem]'>How can we reach you?</h3>
                <p>This is just for the Startup Jobs team</p>
            </div>

            <div className='flex flex-col w-[40%] gap-[0.5rem]'>
                <label htmlFor="companyWebsite">Name</label>
                <input className='w-[100%] border-[2px] rounded-md px-[1rem] py-[0.5rem] border-zinc-600' type="text" placeholder='Richard Horlicks' />
            </div>

            <div className='flex flex-col w-[40%] gap-[0.5rem]'>
                <label htmlFor="companyWebsite">Email</label>
                <input className='w-[100%] border-[2px] rounded-md px-[1rem] py-[0.5rem] border-zinc-600' type="text" placeholder='RichardHorlicks@gmail.om' />
            </div>

            <div className='w-[100%] flex justify-end'>
                <button className='justify-self-end bg-zinc-600 px-[1rem] py-[0.5rem] text-[1.2rem] text-white rounded-md'>Post Job for $100</button>
            </div>

        </div>
    </>
  )
}

export default Form