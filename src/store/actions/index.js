import { notifications as notificationsDefoults, themePair } from 'config';

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
  setMarkdownText({ state, actions }, { documentId, newDocumentText}) {
    const documentName = actions.documents.getDocumentName(documentId)
    state.documents[documentName].markdownText = newDocumentText
  },

  setDocumentName({ state, actions }, { documentId, newDocumentName } ) {
    const renameProperty = (o, newKey, oldKey) => {
      return Object.keys(o).reduce((acc, key) => {
        if (key !== oldKey) {
          acc[key] = o[key];
        } else {
          acc[newKey] = o[key]
        }
        return acc
      }, {});
    }

    const documentName = actions.documents.getDocumentName(documentId)
    state.documents = renameProperty(state.documents, newDocumentName, documentName)
  },

  getDocumentName({ state }, index) {
    return Object.keys(state.documents)[index]
  },

  addDocument({ state }) {
    const numberOfDocuments = Object.keys(state.documents).length;
    state.documents = {...state.documents, // Hidden bug!
      [`doc${numberOfDocuments + 1}.md`]: {
        markdownText: '# Nuevo documento'
      }
    }
  },

  deleteDocument({ state }, documentId) {
    // Remove property
    const newDocuments = Object.keys(state.documents).reduce((acc, key, index) => {
      if (index !== documentId) {
        acc[key] = (state.documents)[key];
      }
      return acc
    }, {})

    state.documents = newDocuments
  }
}

const drawer = {
  setDrawerOpen({ state }, isOpen) {
    state.drawer.open = isOpen
  },
  toggle({ state }) {
    state.drawer.open = !state.drawer.open
  }
}

export {
  theme,
  sw,
  notifications,
  documents,
  drawer
};
