import React from 'react';
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { LogOut, SignIn } from '../index';

function NavBar() {
  const [user] = useAuthState(auth);

  const style = {
    nav: 'bg-gray-800 h-20 flex justify-between items-center p-4',
    heading: 'text-white text-3xl',
  };

  return (
    <div className={style.nav}>
      <h1 className={style.heading}>ChatApp</h1>
      {user ? <LogOut /> : <SignIn />}
    </div>
  );
}

export default NavBar;
