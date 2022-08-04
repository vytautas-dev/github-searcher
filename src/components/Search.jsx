import React, { useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';

const axios = require('axios');
const APICallString = 'https://api.github.com/users/';

const Search = ({ userData, setUserData, setIsLoading, setErrorMessage }) => {
  const [userSearch, setUserSearch] = useState('');

  const searchForUser = (e) => {
    const inputSearch = document.querySelector('.search-input');
    setIsLoading(true);
    axios
      .get(`${APICallString}${userSearch}`)
      .then((response) => {
        setUserData(response.data);
        inputSearch.value = '';
        setIsLoading(false);
        setErrorMessage('');
      })
      .catch((error) => {
        setErrorMessage(
          'Sorry, user not find. Check if you have entered correct name.'
        );
        setUserData({});
        setIsLoading(false);
        console.error(error);
      });
  };

  return (
    <div className='flex items-center justify-center flex-col w-1/2'>
      <div className='header flex items-center justify-center mb-8 gap-2'>
        <BsGithub color='white' className='text-4xl' />
        <h3 className='text-3xl font-bold text-white uppercase w-full text-center whitespace-nowrap'>
          Search for user
        </h3>
      </div>

      <div className='search-container flex grow w-full items-center justify-center'>
        <input
          onChange={(e) => setUserSearch(e.target.value)}
          type='search'
          className='search-input flex-1 p-2 pl-5 text-md text-gray-900 bg-gray-50 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        />
        <button
          onClick={(e) => searchForUser(e)}
          className='bg-blue-500 hover:bg-blue-700 duration-100 text-white font-bold py-2 px-5 rounded text-lg h-full'>
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
