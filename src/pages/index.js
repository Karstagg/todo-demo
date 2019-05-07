import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from '../components/layout';

const LandingPage = () => (
  <Fragment>
    <h1>Demo Todo App</h1>

    <p>
     This is a demo todo app built by Mattew Fisher using Gatsby.js/react and Firebase.
    </p>
  </Fragment>
);

export default () => (
  <Layout>
    <LandingPage />
  </Layout>
);
