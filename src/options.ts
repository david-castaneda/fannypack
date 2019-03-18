export const options = [
  {
    message: 'What is your project name?',
    name: 'name',
    type: 'input',
    default: 'fannypack',
  },
  {
    message: 'What is your preffered language?',
    name: 'language',
    type: 'list',
    choices: [
      { value: 'js', name: 'Javascript' },
      { value: 'ts', name: 'Typescript' },
    ],
  },
  {
    message: 'What type of project are you building?',
    name: 'project',
    type: 'list',
    choices: [
      { value: 'api', name: 'API > Application Programming Interface' },
    ],
  },
  // {
  //   message: 'What services will you be using?',
  //   name: 'services',
  //   type: 'checkbox',
  //   choices: () => [
  //     { value: 'heroku', name: 'Heroku' },
  //     { value: 'now', name: 'Now' },
  //     { value: 'aws', name: 'AWS' },
  //   ],
  // },
];
