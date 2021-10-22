import { notifications } from "config";
import { SnackbarProvider } from "notistack";
import React from "react";

import Notifier from "./Notifier";

function Notifications() {
  return (
    <SnackbarProvider maxSnack={notifications.maxSnack}>
      <Notifier />
    </SnackbarProvider>
  );
}

export default Notifications;
