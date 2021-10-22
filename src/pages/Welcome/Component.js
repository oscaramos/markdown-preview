import React from "react";
import { useHistory } from "react-router-dom";

import { useStore } from "../../store";

function Welcome() {
  const { state } = useStore();

  // Redirect to the first page
  const history = useHistory();
  history.push(`/document/${state.documents[0].id}`);

  return null;
}

export default Welcome;
