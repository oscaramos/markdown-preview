import { resetApp } from 'utils';
import { v1 as uuidv1 } from 'uuid';

const SW = {}; // don't keep it in the store

const sw = {
  update() {
    const registrationWaiting = SW.registration && SW.registration.waiting;

    if (registrationWaiting) {
      registrationWaiting.postMessage({ type: 'SKIP_WAITING' });
      registrationWaiting.onstatechange = function(e) {
        if (e.target.state === 'activated') {
          resetApp();
        }
      };
    }
  },
  saveRegistration(registration) {
    SW.registration = registration;
  },
};

const theme = {
  lsSave(mode) {
    localStorage.setItem('theme-mode', mode);
  },
};

const document = {
  lsSave(documents) {
    const serializedDocuments = Object.entries(documents).reduce(
      (acc, doc) => {
        return {
          ...acc,
          [doc[0]]: {
            markdownText: doc[1].markdownText
          }
        }
    }, {})

    localStorage.setItem('documents', JSON.stringify(serializedDocuments))
  }
}

const genUUID = uuidv1;

export { sw, theme, genUUID, document };
