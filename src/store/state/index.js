import initialDocuments from "./InitialDocuments";

const initialState = {
  theme: {
    mode: localStorage.getItem('theme-mode') || 'dark',
  },
  sw: {
    isInitialized: false,
    isUpdated: false,
    registration: null,
  },
  notifications: [],
  documents: JSON.parse(localStorage.getItem('documents')) || initialDocuments,
  drawer: {
    open: false
  }
};

export { initialState };
