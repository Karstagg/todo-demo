import React, { Component } from 'react';

import { AuthUserContext } from '../Session';
import { withFirebase } from '../Firebase';
import MessageList from './MessageList';
import { Button, Col, Card, Row, CardTitle, Container } from 'reactstrap';

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
      state => ({ messages: state.messages.reverse() }),
    );
  };

  render() {
    const { title, text, messages, loading } = this.state;

    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <Container>
              <Card className='main-card' body>
                <CardTitle style={{ paddingBottom: 10 }}><h1>Add A To do Item</h1></CardTitle>
                <form
                  onSubmit={event =>
                    this.onCreateMessage(event, authUser)
                  }
                >
                  <Row>
                    <Col md='2'>
                      <CardTitle>Title</CardTitle>
                      <input
                        style={{ width: '100%' }}
                        type="text"
                        value={title}
                        onChange={this.onChangeTitle}
                      />
                    </Col>
                    <Col md='10'>
                      <CardTitle>Text</CardTitle>
                      <textarea
                        style={{ width: '100%', minHeight: 100, maxHeight: 100 }}
                        value={text}
                        onChange={this.onChangeText}
                      />
                    </Col>
                  </Row>

                    {!loading && messages ? (
                      <Row md={{offset: 2}}>
                        <Col md='3'>
                          <Button color="primary" type="submit">Add</Button>
                        </Col>
                        <Col md='3'>
                          <Button onClick={this.onNextPage}>
                            More
                          </Button>
                        </Col>

                        <Col md='3'>
                          <Button onClick={this.onReverseOrder}>
                            reverse order
                          </Button>
                        </Col>

                      </Row>
                    ) : <Col md='3'>
                      <Button color="primary" type="submit">Add</Button>
                    </Col>}



                </form>

                {loading && <div>Loading ...</div>}
              </Card>

            {messages && (
              <MessageList
                authUser={authUser}
                messages={messages}
                onEditMessage={this.onEditMessage}
                onRemoveMessage={this.onRemoveMessage}
              />
            )}

            {!messages && <div>There are no messages ...</div>}


          </Container>
        )}
      </AuthUserContext.Consumer>
    );
  }
}

export default withFirebase(Messages);
