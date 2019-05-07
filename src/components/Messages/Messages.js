import React, { Component } from 'react';

import { AuthUserContext } from '../Session';
import { withFirebase } from '../Firebase';
import MessageList from './MessageList';
import { Button, Col, Card, CardText, CardTitle , Row} from 'reactstrap';

class Messages extends Component {
  _initFirebase = false;

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      text: '',
      loading: false,
      messages: [],
      limit: 20,
    };
  }

  firebaseInit = () => {
    if (this.props.firebase && !this._initFirebase) {
      this._initFirebase = true;

      this.onListenForMessages();
    }
  };

  componentDidMount() {
    this.firebaseInit();
  }

  componentDidUpdate() {
    this.firebaseInit();
  }

  onListenForMessages = () => {
    this.setState({ loading: true });

    this.props.firebase
      .messages()
      .orderByChild('createdAt')
      .limitToLast(this.state.limit)
      .on('value', snapshot => {
        const messageObject = snapshot.val();

        if (messageObject) {
          const messageList = Object.keys(messageObject).map(key => ({
            ...messageObject[key],
            uid: key,
          }));

          this.setState({
            messages: messageList,
            loading: false,
          });
        } else {
          this.setState({ messages: null, loading: false });
        }
      });
  };

  componentWillUnmount() {
    this.props.firebase.messages().off();
  }

  onChangeText = event => {
    this.setState({ text: event.target.value });
  };
  onChangeTitle = event => {
    this.setState({ title: event.target.value });
  };

  onCreateMessage = (event, authUser) => {
    this.props.firebase.messages().push({
      title: this.state.title,
      text: this.state.text,
      userId: authUser.uid,
      createdAt: this.props.firebase.serverValue.TIMESTAMP,
    });


    this.setState({ title: '', text: '' });

    event.preventDefault();
  };

  onEditMessage = (message, title, text) => {
    const { uid, ...messageSnapshot } = message;
    this.props.firebase.message(message.uid).set({
      ...messageSnapshot,
      title,
      text,
      editedAt: this.props.firebase.serverValue.TIMESTAMP,
    });
  };

  onRemoveMessage = uid => {
    this.props.firebase.message(uid).remove();
  };

  onNextPage = () => {
    this.setState(
      state => ({ limit: state.limit + 20 }),
      this.onListenForMessages,
    );
  };
  onReverseOrder = () => {
    this.setState(
      state => ({ messages: state.messages.reverse()}),
    );
  };

  render() {
    const {title, text, messages, loading } = this.state;

    return (
      <AuthUserContext.Consumer>
        {authUser => (

          <Col md={{size: 10, offset: 1}} >
           <Row>

            <Card body>
              <h1>Add A Todo Item</h1>
            <form
              onSubmit={event =>
                this.onCreateMessage(event, authUser)
              }
            >
              <div>Title</div>
              <input
                type="text"
                value={title}
                onChange={this.onChangeTitle}
              />
              <div>Text</div>
              <textarea
                style={{width: "100%"}}
                value={text}
                onChange={this.onChangeText}
              />
              <button type="submit">Send</button>
            </form>

            {loading && <div>Loading ...</div>}
            </Card>
           </Row>
            {messages && (
              <MessageList
                authUser={authUser}
                messages={messages}
                onEditMessage={this.onEditMessage}
                onRemoveMessage={this.onRemoveMessage}
              />
            )}
            {!loading && messages && (
              <div>
                <Button onClick={this.onNextPage}>
                  More
                </Button>
                <Button onClick={this.onReverseOrder}>
                  reverse order
                </Button>
              </div>
            )}

            {!messages && <div>There are no messages ...</div>}


          </Col>
        )}
      </AuthUserContext.Consumer>
    );
  }
}

export default withFirebase(Messages);
