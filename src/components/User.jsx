import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const User = () => {
  const { avatar_url, name, html_url, followers, public_repos, bio, location } =
    useContext(UserContext);
  return (
    <div className='flex flex-col lg:grid grid-cols-4 w-full gap-5 p-4 bg-black bg-opacity-60'>
      <div className='name border border-slate-500 row-span-2 rounded-lg flex flex-col items-center gap-5 p-10'>
        <div className='flex img-wrapper w-9/12 flex-col items-center gap-2'>
          <img src={avatar_url} alt='avatar' className='rounded-full' />
          <p className='text-white font-medium text-xl'> {name} </p>
        </div>
        <a
          href={html_url}
          target='_blank'
          rel='noreferrer'
          className='w-3/4 flex items-center'>
          <button className='bg-green-500 hover:bg-green-700 text-white font-medium py-2 px-4 rounded text-sm w-full '>
            Get in touch
          </button>
        </a>
      </div>
      <div className='location border border-slate-500 rounded-lg flex items-center justify-center p-10'>
        <div className=' flex flex-col items-center gap-2'>
          <p className='font-bold text-xl text-white text-center whitespace-nowrap '>
            {location}
          </p>
          <span className='text-white'>location</span>
        </div>
      </div>
      <div className='followers border border-slate-500 rounded-lg flex items-center justify-center p-10 '>
        <div className=' flex flex-col items-center gap-2'>
          <p className='font-bold text-xl text-white'>{followers}</p>
          <span className='text-white'>followers</span>
        </div>
      </div>
      <div className='repositories bg-black-100 rounded-lg flex items-center justify-center p-10 border border-slate-500'>
        <div className=' flex flex-col items-center gap-2'>
          <p className='font-bold text-xl text-white'>{public_repos}</p>
          <span className='text-white'>repositories</span>
        </div>
      </div>
      <div className='about border border-slate-500 col-span-3 rounded-lg flex items-center justify-center p-5 '>
        <div className='w-5/6  flex flex-col items-center justify-center gap-2'>
          <h3 className='text-white font-bold text-lg text-center'>
            More about {name}
          </h3>
          <p className='text-white w-full text-center'>{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
