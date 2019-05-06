import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

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
       <div>
            <Row>
              <Col sm="8">
                <Card body>
                  {!editMode ? <div><CardTitle>{message.title}</CardTitle> <CardText>{message.text}</CardText></div> :
                    <div>
                      <CardTitle>
                        <input
                          type="text"
                          value={editTitle}
                          onChange={this.onChangeEditTitle}
                        />
                      </CardTitle>
                      <CardText>
                        <input
                          type="text"
                          value={editText}
                          onChange={this.onChangeEditText}
                        />
                      </CardText>
                    </div>
                  }

                  <CardText>(Last edited at {message.editedAt ? new Date(message.editedAt).toString() : new Date(message.createdAt).toString()})</CardText>
                  {!editMode ? <div ><Button color="primary" onClick={this.onToggleEditMode}>Edit</Button><Button color="danger" onClick={() => onRemoveMessage(message.uid)}>Delete</Button></div> :
                    <div><Button color="primary" onClick={this.onSaveEditText}>Save</Button><Button onClick={this.onToggleEditMode}>Reset</Button></div>
                  }
                </Card>
              </Col>
            </Row>
       </div>
      );
    } else {
      return(
        null
      )
    }
  }
}

export default MessageItem;
