import React, { useContext } from 'react';
import User from './User';
import { UserContext } from '../context/UserContext';
import LoadingSpinner from './spinner/Spinner';

const Result = ({ errorMessage, isLoading }) => {
  const userData = useContext(UserContext);
  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : Object.keys(userData).length === 0 ? (
        <></>
      ) : (
        <div className='w-full mt-10'>
          <User />
        </div>
      )}
      {errorMessage && (
        <div className='error text-white mt-10 bg-red-800 p-5 text-center'>
          {errorMessage}
        </div>
      )}
    </>
  );
};

export default Result;
