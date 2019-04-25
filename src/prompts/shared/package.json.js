module.exports = [
  {
    type: "input",
    name: "projectName",
    message: "Name of your project?",
    validate: value => {
      if (/.+/.test(value)) return true;
      return 'Project name is required';
    },
  },
  {
    type: "input",
    name: "projectDescription",
    message: "Short description of your project?"
  },
  {
    type: "input",
    name: "projectAuthor",
    message: "Author of your project?"
  }
]
