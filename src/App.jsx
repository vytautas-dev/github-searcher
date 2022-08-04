import React, { useState } from 'react';
import Search from './components/Search';
import Result from './components/Result';
import { UserContext } from './context/UserContext';

import './App.css';

const App = () => {
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <UserContext.Provider value={userData}>
      <div className='h-screen flex items-center p-8 flex-col'>
        <Search
          userData={userData}
          setUserData={setUserData}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />
        <Result errorMessage={errorMessage} isLoading={isLoading} />
      </div>
    </UserContext.Provider>
  );
};

export default App;
