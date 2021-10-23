import { isMobile } from "utils";

/* set your data here */
const email = "oscar.ramos@ucsp.edu.pe";
const domain = "i-dont-have-domain-yet.com";
/* ***************** */

const repository = "https://github.com/oscaramos/markdown-preview";

const messages = {
  app: {
    crash: {
      title: "Oooops... Sorry, I guess, something went wrong. You can:",
      options: {
        email: `contact with author by this email - ${email}`,
        reset: "Press here to reset the application",
      },
    },
  },
  loader: {
    fail: "Hmmmmm, there is something wrong with this component loading process... Maybe trying later would be the best idea",
  },
  images: {
    failed: "something went wrong during image loading :(",
  },
  404: "Hey bro? What are you looking for?",
};

const copyright = {
  title: "copyright © ",
  link: domain,
};

const themes = {
  light: {
    palette: {
      mode: "light",
    },
  },

  dark: {
    palette: {
      mode: "dark",
    },
  },
};

const cancelationMessage = "operation is manually canceled";

const dateFormat = "MMMM DD, YYYY";

const title = "Markdown Preview";

const themePair = ["dark", "light"];

const notifications = {
  options: {
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    autoHideDuration: 3000,
  },
  maxSnack: isMobile ? 3 : 4,
};

const loader = {
  // no more blinking in your app
  delay: 300, // if your asynchronous process is finished during 300 milliseconds you will not see the loader at all
  minimumLoading: 700, // but if it appears, it will stay for at least 700 milliseconds
};

export {
  messages,
  cancelationMessage,
  dateFormat,
  copyright,
  email,
  domain,
  repository,
  loader,
  title,
  themePair,
  notifications,
  themes,
};
