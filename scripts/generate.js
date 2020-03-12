const inquirer = require('inquirer')
const fs = require('fs')

const CHOICES = fs.readdirSync(`${__dirname}/templates`)

const QUESTIONS = [
  {
    name: '__TEMPLATE',
    type: 'list',
    message: 'What template would you like to generate?',
    choices: CHOICES
  },
  {
    name: '__COMPONENT',
    type: 'input',
    message: 'Name:',
    validate: (input) => {
      if (!input) {
        return 'You must enter a name.'
      }
      if (input[0].toUpperCase() !== input[0]) {
        return 'You must start a component name with a capital letter.'
      }
      return true
    }
  },
  {
    name: '__DESCRIPTION',
    type: 'input',
    message: 'Description:',
    validate: (input) => {
      if (input.length < 25) {
        return 'Description must be at least 25 characters.'
      }
      return true
    }
  }
]

const callback = (answers) => {
  fs.mkdir(`${__dirname}/../src/storybook/__GENERATED/`, () => {
    // Path exists
  })
  fs.mkdir(`${__dirname}/../src/storybook/__GENERATED/${answers.__COMPONENT}`, (err) => {
    if (err) {
      throw Error('Could not write to folder. NPM may not have privileges to access it, or there may already be a component with that name')
    }
  })

  const root = `${__dirname}/templates/${answers.__TEMPLATE}/`
  fs.readdir(root, (err1, files) => {
    if (!err1) {
      files.forEach(file => {
        fs.readFile(root + file, 'utf-8', (err2, content) => {
          if (!err2) {
            Object.keys(answers).forEach(key => {
              content = content.replace(new RegExp(key, 'g'), answers[key])
            })
            const filename = `${file.replace('Example', answers.__COMPONENT)}`
            fs.writeFile(`${__dirname}/../src/storybook/__GENERATED/${answers.__COMPONENT}/${filename}`, content, () => {
              // Overide the file.
            })
          }
        })
      })
    }
  })
}

inquirer.prompt(QUESTIONS).then(answers => {
  callback(answers)
})