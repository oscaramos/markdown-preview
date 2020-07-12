import TemplateDocument1 from "./TemplateDocument1";

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
      markdownText: TemplateDocument1
    },
    "doc2.md": {
      markdownText: '# Document 2'
    },
    "doc3.md": {
      markdownText: '# Document 3'
    }
  }
};

export { initialState };
