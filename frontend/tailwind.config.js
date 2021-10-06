module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        chat: "920px",
      },
      textColor: {
        "user-lightBlue": "#0398fc",
        "user-red": "#f20b07",
        "user-orange": "#f0822e",
        "user-yellow": "#f0f02e",
        "user-lightGreen": "#42ed18",
        "user-blue": "#182ded",
        "user-purple": "#511dcc",
        "user-pink": "#a910e6",
        "user-teal": "#5eadac",
        "user-green": "#3d5733",
        "user-darkPink": "#694c62",
        "user-black": "#000000",
      },
      backgroundColor: ["active"],
      text: ["active"],
      colors: {
        "nav-divider": "hsla(0,0%,100%,.1)",
        "search-button": "hsla(0,0%,100%,.15)",
        "nav-dots-background-hover": "hsla(0,0%,100%,.2)",
        "search-box-hover": "hsla(0,0%,100%,.3)",
        "search-button-disabled": "hsla(0,0%,100%,.5)",
        "modal-backdrop": "rgba(0,0,0,.85)",
        "nav-gray": "#18181b",
        "button-hover": "#a970ff",
        "text-input": "#efeff1",
        "button-primary-default": "#9147ff",
        "button-primary-hover": "#772ce8",
        "text-label": "#f7f7f8",
        "light-gray": "#fff",
        "side-nav-bar": "#1f1f23",
        "background-body": "#0e0e10",
        "users-chat-background": "#040109",
      },
      height: {
        50: "50px",
        "active-indicator": "0.2rem",
        "input-size-large": "3.6rem",
        "search-button": "2.4rem",
        "default-button-height": "3rem",
        "chat-input": "4.3rem",
      },
      minHeight: {
        "50vh": "50vh",
      },
      maxHeight: {
        stream: "calc(100vh - 16rem)",
      },
      width: {
        50: "50px",
        "1p": "1px",
        "search-button": "2.4rem",
        "modal-width": "42rem",
        "default-button-width": "3rem",
        "auth-modal": "201px",
        stream: "calc(100% - 34rem)",
        content: "fit-content",
        chat: "34rem",
      },
      minWidth: {
        "dob-date": "8rem",
        chat: "34rem",
      },
      maxWidth: {
        "search-bar": "40rem",
      },
      margin: {
        "active-indicator": "-.1rem",
        stream: "calc(100vh - 16rem)",
      },
      padding: {
        "search-box": "0.5rem 1rem",
        "search-button": "0 0.5rem",
        full: "100%",
        modal: "3rem 2rem",
        56.25: "56.25%",
      },
      borderRadius: {
        "search-box": "0.6rem 0 0 0.6rem",
        "search-button": "0 0.6rem 0.6rem 0",
        "left-nav-bar": "0.4rem",
        "account-modal": "0.6rem",
        "user-avatar": "9000px",
      },
      borderWidth: {
        1: "1px",
      },
      fontSize: {
        "search-box": "1.4rem",
        "button-text": "1.3rem",
        4: "1.8rem",
        2: "2rem",
      },
      zIndex: {
        5000: 5000,
        1: 1,
      },
      flex: {
        basis: "0 0 40rem",
      },
      boxShadow: {
        "nav-bar": "0 1px 2px rgba(0,0,0,0.9), 0 0 2px rgba(0,0,0,0.9)",
        "account-modal": "0 4px 8px rgba(0,0,0,.4), 0 0 4px rgba(0,0,0,.4)",
      },
      lineHeight: {
        1.5: 1.5,
        heading: 1.2,
        "dob-month": "normal",
        normal: "3rem",
      },
      translate: {
        right: "calc(100vw - 100% - 1rem)",
        chat: "-34rem",
      },
      transitionDelay: {
        0: "0",
      },
    },
  },
  important: true,
  variants: {
    extend: {
      borderStyle: ["hover", "focus", "focus-visible"],
      appearance: ["hover", "focus"],
    },
  },
  plugins: [],
};
