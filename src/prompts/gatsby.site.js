const packagePrompt = require('./shared/package.json');

module.exports = [
  ...packagePrompt,
  {
    type: "confirm",
    name: "isContentful",
    message: "Do you want to use Contentful as a source?"
  },
  {
    when: (response) => {
      return response.isContentful
    },
    type: 'input',
    name: 'contentfulToken',
    message: 'What is your Contentful API Token?',
    default: 'CONTENTFUL_TOKEN',
  },
  {
    when: (response) => {
      return response.isContentful
    },
    type: 'input',
    name: 'contentfulSpace',
    message: 'What is your Contentful Space ID?',
    default: 'CONTENTFUL_SPACE',
  }
]
