import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from '../components/layout';

const LandingPage = () => (
  <Fragment>
    <h1>Landing</h1>
    {console.log(process.env.REACT_APP_API_KEY, "hredkfhdsf")}
    <p>
      The Landing Page is open to everyone, even though the user isn't
      signed in.
    </p>
  </Fragment>
);

export default () => (
  <Layout>
    <LandingPage />
  </Layout>
);
