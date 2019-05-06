import React, { Component } from 'react';

class MessageItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      editText: this.props.message.text,
      editTitle: this.props.message.title
    };
  }

  onToggleEditMode = () => {
    this.setState(state => ({
      editMode: !state.editMode,
      editText: this.props.message.text,
      editTitle: this.props.message.title
    }));
  };

  onChangeEditText = event => {
    this.setState({ editText: event.target.value });
  };
  onChangeEditTitle = event => {
    this.setState({ editTitle: event.target.value });
  };

  onSaveEditText = () => {
    this.props.onEditMessage(this.props.message, this.state.editTitle, this.state.editText);

    this.setState({ editMode: false });
  };

  render() {
    const { authUser, message, onRemoveMessage } = this.props;
    const { editMode, editText, editTitle } = this.state;

    if(authUser.uid === message.userId) {


      return (
        <li>
          {editMode ? (
            <div>
              <input
                type="text"
                value={editTitle}
                onChange={this.onChangeEditTitle}
              />
              <input
                type="text"
                value={editText}
                onChange={this.onChangeEditText}
              />
            </div>

          ) : (
            <span>
             {message.title + " " + message.text}
              {<span>(Last edited at {message.editedAt ? new Date(message.editedAt).toString() : new Date(message.createdAt).toString()})</span>}
          </span>
          )}

          {authUser.uid === message.userId && (
            <span>
            {editMode ? (
              <span>
                <button onClick={this.onSaveEditText}>Save</button>
                <button onClick={this.onToggleEditMode}>Reset</button>
              </span>
            ) : (
              <button onClick={this.onToggleEditMode}>Edit</button>
            )}

              {!editMode && (
                <button
                  type="button"
                  onClick={() => onRemoveMessage(message.uid)}
                >
                  Delete
                </button>
              )}
          </span>
          )}
        </li>
      );
    } else {
      return(
        null
      )
    }
  }
}

export default MessageItem;
