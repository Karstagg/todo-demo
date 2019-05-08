import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Container, Col, Card, CardTitle, CardText, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'gatsby'
import './main.css'

import Layout from '../components/layout';


const LandingPage = () => (
  <Fragment>
    <Container>
      <Row>
        <Col md="12">
          <Card body className='main-card'>
            <CardTitle> <h2>Todo List</h2></CardTitle>
            <CardText><h5>This is a demo todo app built by Matthew Fisher using Gatsby.js/react, Firebase, and Netlify.</h5></CardText>
            <CardText>To get started please visit the sign in page to sign in or sign up using e-mail or Google</CardText>
            <Button className='card-button' color='primary'><Link to='./signin'>Get Started</Link></Button>
          </Card>
        </Col>
      </Row>
    </Container>
  </Fragment>
);

export default () => (
  <Layout>
    <LandingPage/>
  </Layout>
);
