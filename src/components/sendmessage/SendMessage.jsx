import React, { useState } from 'react';
import { auth, db } from '../../firebase';
import { collection, serverTimestamp, addDoc } from 'firebase/firestore';

const SendMessage = () => {
  const [text, setText] = useState('');
  const style = {
    form: 'h-14 w-full flex text-xl absolute  bottom-[0]',
    input: 'w-full text-xl p-3 bg-gray-900 text-white outline-none border-none',
    button: 'w-[20%] bg-green-500',
  };

  const submitMessage = async (e) => {
    e.preventDefault();

    if (text === '') {
      alert('Please enter the a valid message');
      return;
    }
    const { uid, displayName } = auth.currentUser;
    const messageRef = collection(db, 'messages');

    try {
      await addDoc(messageRef, {
        text: text,
        name: displayName,
        uid: uid,
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      console.log('error when submitting message', error);
    }

    setText('');
  };

  //
  return (
    <form
      className={style.form}
      onSubmit={submitMessage}>
      <input
        type='text'
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        className={style.input}
        placeholder='message'
      />
      <button
        type='submit'
        className={style.button}>
        Send
      </button>
    </form>
  );
};

export default SendMessage;
