import { useSnackbar } from "notistack";
import { useEffect, useRef } from "react";
import { useStore } from "store";

function Notifier() {
  const {
    state: { notifications },
    actions,
  } = useStore();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const displayed = useRef([]);

  function storeDisplayed(key) {
    displayed.current = [...displayed.current, key];
  }

  function removeDisplayed(key) {
    displayed.current = [...displayed.current.filter((_key) => key !== _key)];
  }

  useEffect((_) => {
    notifications.forEach(({ message, options, dismissed }) => {
      if (dismissed) {
        // dismiss snackbar using notistack
        closeSnackbar(options.key);
        return;
      }

      // do nothing if snackbar is already displayed
      if (displayed.current.includes(options.key)) return;

      // display snackbar using notistack
      enqueueSnackbar(message, {
        ...options,
        onExited(event, key) {
          // removen this snackbar from the store
          actions.notifications.remove(key);
          removeDisplayed(key);
        },
      });

      // keep track of snackbars that we've displayed
      storeDisplayed(options.key);
    });
  });

  return null;
}

export default Notifier;
