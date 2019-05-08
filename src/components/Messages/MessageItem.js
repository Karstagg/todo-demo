import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Row, Container, Col } from 'reactstrap';

class MessageItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      editText: this.props.message.text,
      editTitle: this.props.message.title,
    };
  }

  onToggleEditMode = () => {
    this.setState(state => ({
      editMode: !state.editMode,
      editText: this.props.message.text,
      editTitle: this.props.message.title,
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

    if (authUser.uid === message.userId) {


      return (
        <span>
        <Container>
          <Row>
            <Card body className={this.props.type % 2 === 0 ? 'sub-card2' : 'sub-card'}>
              {!editMode ?
                <div>
                  <Row>
                    <Col md={{size: 8, offset: 2}} >
                  <CardTitle><h3>{message.title}</h3></CardTitle>
                    </Col>
                    <Col style={{textAlign: 'right'}} md='1'>
                      <Button style={{width: 72.9}} color="primary" onClick={this.onToggleEditMode}>Edit</Button>
                    </Col>
                    <Col style={{textAlign: 'left'}} md='1'>
                      <Button color="danger" onClick={() => onRemoveMessage(message.uid)}>Delete</Button>
                    </Col>
                  </Row>
                  < hr/>
                  <CardText style={{textAlign: 'left'}}>{message.text}</CardText>

                  <Row style={{paddingTop: 20}}>
                    <Col md='12'>
                    <CardText style={{textAlign: 'right', color: 'lightGrey'}}>(Last edited
                      at {message.editedAt ? new Date(message.editedAt).toString() : new Date(message.createdAt).toString()})
                    </CardText>
                    </Col>
                  </Row>
                </div>
                :
                <div>
                  <Row>
                    <Col md={{size: 8, offset: 2}} >
                      <CardTitle><input
                        type="text"
                        value={editTitle}
                        onChange={this.onChangeEditTitle}
                      /></CardTitle>
                    </Col>
                    <Col style={{textAlign: 'right'}} md='1'>
                      <Button style={{width: 72.9}} color="primary" onClick={this.onSaveEditText}>Save</Button>
                    </Col>
                    <Col style={{textAlign: 'left'}} md='1'>
                      <Button color="danger" style={{width: 72.9}} onClick={this.onToggleEditMode}>Reset</Button>
                    </Col>
                  </Row>
                  < hr/>
                  <CardText style={{textAlign: 'left'}}><textarea
                    style={{width: "100%"}}
                    value={editText}
                    onChange={this.onChangeEditText}
                  /></CardText>

                  <Row style={{paddingTop: 20}}>
                    <Col md='12'>
                      <CardText style={{textAlign: 'right', color: 'lightGrey'}}>(Last edited
                        at {message.editedAt ? new Date(message.editedAt).toString() : new Date(message.createdAt).toString()})
                      </CardText>
                    </Col>
                  </Row>
                </div>
              }
            </Card>

          </Row>
        </Container>
        </span>
      );
    } else {
      return (
        null
      );
    }
  }
}

export default MessageItem;
