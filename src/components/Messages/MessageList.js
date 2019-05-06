import React from 'react';

import MessageItem from './MessageItem';

const MessageList = ({
  authUser,
  messages,
  onEditMessage,
  onEditTitle,
  onRemoveMessage,
}) => (
  <ul>
    {messages.map(message => (
      <MessageItem
        authUser={authUser}
        key={message.uid}
        message={message}
        onEditMessage={onEditMessage}
        onEditTitle={onEditTitle}
        onRemoveMessage={onRemoveMessage}
      />
    ))}
  </ul>
);

export default MessageList;
