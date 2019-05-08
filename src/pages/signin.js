import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout';
import SignInForm, {
  SignInGoogle,
  SignInFacebook,
  SignInTwitter,
} from '../components/SignIn';
import { SignUpLink } from '../components/SignUp';
import { PasswordForgetLink } from '../components/PasswordForget';
import {Card, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
import { Link } from 'gatsby';
import './main.css';

const SignInPage = () => (
  <Fragment>
    <Container>
      <Card body className='main-card'>
        <CardTitle><h2>Sign In</h2></CardTitle>
        <Row>

          <Col md="6">
            <Card className='sub-card'>
              <CardText><SignInForm/></CardText>
            </Card>
          </Col>
          <Col className='col-md-6'>
            <Card className='sub-card'>
              <CardText><SignInGoogle/></CardText>
            </Card>
          </Col>
          <Col md='12'>
            <CardText><PasswordForgetLink/></CardText>
            <CardText><SignUpLink/></CardText>
          </Col>
        </Row>
      </Card>
    </Container>
  </Fragment>
);

export default () => (
  <Layout>
    <SignInPage/>
  </Layout>
);
