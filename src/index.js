import store from "store";

import "./global.css";
import * as serviceWorker from "./serviceWorker";

if (!document.ie) {
  // check for ie
  Promise.all([import("react"), import("react-dom"), import("App")]).then(
    ([{ default: React }, { default: ReactDOM }, { default: App }]) => {
      ReactDOM.render(<App />, document.getElementById("root"));
    }
  );

  serviceWorker.register({
    onSuccess: store.actions.sw.handleSuccess,
    onUpdate: (reg) => store.actions.sw.handleUpdate(reg),
  });
}
