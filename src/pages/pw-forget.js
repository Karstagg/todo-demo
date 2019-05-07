import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout';
import PasswordForgetForm from '../components/PasswordForget';

const PasswordForgetPage = () => (
  <Fragment>
    <h1>PasswordForget</h1>
    <PasswordForgetForm />
  </Fragment>
);

export default () => (
  <Layout>
    <PasswordForgetPage />
  </Layout>
);
