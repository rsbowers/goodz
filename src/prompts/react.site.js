const packagePrompt = require('./shared/package.json');

module.exports = [
  ...packagePrompt,
  {
    type: "confirm",
    name: "isRedux",
    message: "Should this react app have Redux?"
  },
]