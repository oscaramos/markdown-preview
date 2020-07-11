import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Meta from 'components/Meta';

import useStyles from './styles';
import { useStore } from "../../store";

function Page1() {
  const classes = useStyles();
  const { state, actions, effects } = useStore();

  return (
    <>
      <Meta
        title="Page 1"
        description="Page 1"
      />
      <Container maxWidth="sm" className={classes.root}>
        <Typography variant="h3">Page 1</Typography>
      </Container>
    </>
  );
}

export default Page1;
