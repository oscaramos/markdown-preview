import { themePair, notifications as notificationsDefoults } from 'config';

const theme = {
  toggle({ effects, state }) {
    const mode = state.theme.mode === themePair[0] ? themePair[1] : themePair[0];
    state.theme.mode = mode;
    effects.theme.lsSave(mode);
  },
};

const sw = {
  handleSuccess({ state }) {
    state.sw.isInitialized = true;
  },
  handleUpdate({ effects, state }, registration) {
    state.sw.isUpdated = true;
    effects.sw.saveRegistration(registration);
  },
  update({ effects, state }) {
    effects.sw.update();
  },
};

const notifications = {
  push({ state, effects }, notification) {
    state.notifications.push({
      ...notification,
      dismissed: false,
      options: {
        ...notificationsDefoults.options,
        ...notification.options,
        key: effects.genUUID(),
      },
    });
  },

  close({ state }, key, dismissAll = !key) {

    state.notifications = state.notifications.map(
      notification => (dismissAll || notification.options.key === key)
        ? { ...notification, dismissed: true }
        : { ...notification }
    );
  },

  remove({ state }, key) {
    state.notifications = state.notifications.filter(
      notification => notification.options.key !== key,
    );
  }
};

const documents = {
  setMarkdownText({ state, actions }, newText) {
    const documentName = actions.documents.getDocumentName(0)
    state.documents[documentName].markdownText = newText
  },

  setDocumentName({ state, actions }, newDocumentName) {
    const renameProperty = (o, newKey, oldKey) => {
      if (oldKey !== newKey) {
        Object.defineProperty(o, newKey,
          Object.getOwnPropertyDescriptor(o, oldKey));
        delete o[oldKey];
      }
    }

    const documentName = actions.documents.getDocumentName(0)
    renameProperty(state.documents, newDocumentName, documentName)
  },

  getDocumentName({ state }, index) {
    return Object.keys(state.documents)[index]
  }
}

export {
  theme,
  sw,
  notifications,
  documents
};
