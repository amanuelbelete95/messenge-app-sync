import React from 'react';
import { NavBar } from './components/index';
import { ChatContainer } from './components/index.js';
import { auth } from './firebase.js';
import { useAuthState } from 'react-firebase-hooks/auth';

const style = {
  appContainer: `max-w-[720px] mx-auto text-center`,
  sectionContainer: `flex flex-col min-h-[90vh] bg-gray mt-10 shadow-xl border relative m-`,
};

function App() {
  const [user] = useAuthState(auth);
  // console.log(user);
  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        <NavBar />

        {user ? <ChatContainer /> : null}
      </section>
    </div>
  );
}

export default App;
