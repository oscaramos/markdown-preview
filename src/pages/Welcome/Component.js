import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import Layout from "components/Layout";
import Meta from "components/Meta";

import { useStore } from "../../store";

function Welcome() {
  const { state } = useStore();

  const history = useHistory();

  useEffect(() => {
    // Redirect to the first page
    if (state.documents.length > 0) {
      history.replace(`/document/${state.documents[0].id}`);
    }
  }, [history, state.documents]);

  return (
    <>
      <Meta title="Document editor" description="Document editor" />
      <Layout>Add a new document</Layout>
    </>
  );
}

export default Welcome;
