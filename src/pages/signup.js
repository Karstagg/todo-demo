import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout';
import SignUpForm, { SignUpLink } from '../components/SignUp';
import { Card, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
import SignInForm, { SignInGoogle } from '../components/SignIn';
import { PasswordForgetLink } from '../components/PasswordForget';

const SignUpPage = () => (
  <Fragment>
    <Container>
      <Card body className='main-card2'>
        <CardTitle><h2>Sign Up</h2></CardTitle>
        <Row>
          <Col md="12">
            <Card className='sub-card'>
              <CardText><SignUpForm /></CardText>
            </Card>
          </Col>
        </Row>
      </Card>
    </Container>
  </Fragment>
);

export default () => (
  <Layout>
    <SignUpPage />
  </Layout>
);
