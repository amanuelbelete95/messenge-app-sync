import React from 'react';
import { auth } from '../../firebase';

const LogOut = () => {
  const style = {
    logButton: `bg-gray-500 px-4 py-2 hover:bg-gray-100`,
  };

  const handleLogOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log('error logging out', error);
    }
  };

  return (
    <button
      className={style.logButton}
      onClick={handleLogOut}>
      LogOut
    </button>
  );
};

export default LogOut;
