import React, { useEffect, useState } from 'react';

import { auth } from '../../firebase';

const Message = ({ message }) => {
  const [notification, setNotification] = useState(true);

  const style = {
    messageContainer: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
    name: `absolute mt-[-4rem] text-gray-600 text-xs`,
    sent: 'bg-[#395dff] text-white flex-row-reverse float-right rounded-bl-full',
    recieved: `bg-[#e5e5ea] text-black float-left rounded-br-full`,
  };

  const { uid } = message;
  const messageClass =
    message.uid === auth.currentUser.uid ? style.sent : style.recieved;

  useEffect(() => {
    if (!notification) {
      return;
    }

    if (message.uid !== auth.currentUser.uid) {
      alert('you have a new message');
    }

    setNotification(false);
  }, [notification, uid]);

  return (
    <div>
      <div className={`${style.messageContainer} ${messageClass}`}>
        <p className={style.name}>{message.name}</p>
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
