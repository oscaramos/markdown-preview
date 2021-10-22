import { themePair } from "config";
import { v4 as uuidv4 } from "uuid";

const theme = {
  toggle({ effects, state }) {
    const mode =
      state.theme.mode === themePair[0] ? themePair[1] : themePair[0];
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
  update({ effects }) {
    effects.sw.update();
  },
};

const documents = {
  setMarkdownText(
    { state, actions, effects },
    { documentId, newDocumentText }
  ) {
    const document = state.documents.find(
      (document) => document.id === documentId
    );
    document.markdownText = newDocumentText;
    effects.document.lsSave(state.documents);
  },

  setDocumentName(
    { state, actions, effects },
    { documentId, newDocumentName }
  ) {
    const document = state.documents.find(
      (document) => document.id === documentId
    );
    document.title = newDocumentName;
    effects.document.lsSave(state.documents);
  },

  addDocument({ state, effects }, { title }) {
    state.documents = [
      ...state.documents,
      {
        id: uuidv4(),
        title,
        markdownText: "New document",
      },
    ];
    effects.document.lsSave(state.documents);
  },

  deleteDocument({ state, effects }, documentId) {
    state.documents = state.documents.filter(
      (document) => document.id !== documentId
    );
    effects.document.lsSave(state.documents);
  },
};

const drawer = {
  setDrawerOpen({ state }, isOpen) {
    state.drawer.open = isOpen;
  },
  toggle({ state }) {
    state.drawer.open = !state.drawer.open;
  },
};

export { theme, sw, documents, drawer };
