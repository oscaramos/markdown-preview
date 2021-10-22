import DocumentEditor from "pages/DocumentEditor";
import Welcome from "pages/Welcome";

import NotFound from "components/NotFound";

const routes = [
  {
    exact: true,
    component: Welcome,
    path: "/",
  },
  {
    exact: true,
    component: DocumentEditor,
    path: "/document/:docId",
  },
  {
    component: NotFound,
  },
];

export default routes;
