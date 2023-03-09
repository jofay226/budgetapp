import React from 'react'
import { useRouteError, Link, useNavigate } from 'react-router-dom';

// library imports
import { HomeIcon, ArrowUturnLeftIcon } from '@heroicons/react/24/solid';

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className='error'>
      <h1>Uh oh! We've got a problem</h1>
      <p>{error.message || error.statusText}</p>
      <div className='flex-md'>
        <button onClick={ () => navigate(-1)} className='btn btn--dark'><ArrowUturnLeftIcon width={20}/><span>Go Back</span> </button>
        <Link to='/' className='btn btn--dark'><span>Go home</span><HomeIcon width={20}/></Link>
      </div>
    </div>
  )
}

export default Error