import React from 'react'
import { useForm } from 'react-hook-form'


const Create = () => {
  const {register, handleSubmit }=useForm();
  return (
    <div>
      <form> 
        <input className='block border-b outline-0 p-2' 
        {...register ('image')} type="file" />
        <input className='block border-b outline-0 p-2' 
        {...register ('image')} type="file" />
        <input className='block border-b outline-0 p-2' 
        {...register ('title')} type="text" placeholder='Recipe Title'/>
      
      </form>
    </div>
  )
}

export default Create
