import React, { useState, useEffect, useRef } from 'react';
import { db } from '../../firebase';
import { query, collection, onSnapshot, orderBy } from 'firebase/firestore';
import { Message, SendMessage } from '../index';

const ChatContainer = () => {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  // const scroll = useRef();

  useEffect(() => {
    const messagesQuery = query(
      collection(db, 'messages'),
      orderBy('timestamp')
    );

    const unsubscribe = onSnapshot(messagesQuery, (querySnapshot) => {
      let displayMessages = [];
      querySnapshot.forEach((doc) =>
        displayMessages.push({
          ...doc.data(),
        })
      );
      setMessages(displayMessages);
    });

    return () => unsubscribe();
  }, []);

  const style = {
    mainClass: `flex flex-col p-[10px] relative min-h-70 mb-20 mt-5`,
  };

  return (
    <div>
      <main className={style.mainClass}>
        {messages &&
          messages.map((message) => (
            <Message
              key={message.id}
              message={message}
            />
          ))}
      </main>
      <SendMessage />

      <span ref={messagesEndRef}></span>
    </div>
  );
};

export default ChatContainer;
