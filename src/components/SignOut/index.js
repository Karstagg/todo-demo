import React from 'react';
import { Button } from 'reactstrap';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <Button
    color="primary"
    onClick={firebase ? firebase.doSignOut : () => {}}
  >
    {'Sign Out'}
  </Button>
);

export default withFirebase(SignOutButton);
