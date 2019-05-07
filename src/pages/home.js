import React from 'react';
import { compose } from 'recompose';
import {Row} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from '../components/layout';
import {
  withAuthorization,
  withEmailVerification,
} from '../components/Session';
import Messages from '../components/Messages';

const HomePageBase = () => (
  <Row>
    <Messages />
  </Row>
);

const condition = authUser => !!authUser;

const HomePage = compose(
  withEmailVerification,
  withAuthorization(condition),
)(HomePageBase);

export default () => (
  <Layout>
    <HomePage />
  </Layout>
);
