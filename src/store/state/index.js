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
  documents: {
    "doc1.md": {
      markdownText: '# Holita'
    }
  }
};

export { initialState };
