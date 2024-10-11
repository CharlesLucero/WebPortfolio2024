module.exports = {
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest",
    },
    transformIgnorePatterns: [
      "<rootDir>/node_modules/(?!axios)" // Add other packages if necessary
    ],
    testEnvironment: "jsdom",
  };
  