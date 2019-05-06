import React from 'react';

import MessageItem from './MessageItem';

const MessageList = ({
  authUser,
  messages,
  onEditMessage,
  onEditTitle,
  onRemoveMessage,
}) => (
  <div>
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
  </div>
);

export default MessageList;
