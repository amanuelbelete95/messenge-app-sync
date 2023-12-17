import { signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { GoogleButton } from 'react-google-button';
import { auth } from '../../firebase';

const SignIn = () => {
  const style = {
    wrapper: 'flex justify-center',
  };

  const googleSignIn = async () => {
    //synchronously function being called;
    const provider = new GoogleAuthProvider();

    //asynchronous operation
    try {
      await signInWithRedirect(auth, provider);
    } catch (error) {
      console.error('Error during Google Sign-In:', error);
    }
  };

  return (
    <div className={style.wrapper}>
      <GoogleButton onClick={googleSignIn} />
    </div>
  );
};

export default SignIn;
