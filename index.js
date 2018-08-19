#!/usr/bin/env node
const {api} = require('./utilities'), program = require('commander'),
  axios = require('axios'), {prompt} = require('inquirer'),
  chalk = require('chalk'), moment = require('moment'),
  request = require('request'),
  figlet = require('figlet')

let user_token

axios.defaults.headers.common['Authorization'] = `token 69f97987d8e2b0384cb0b2695fbb80a7d9b6ed5aa4a6d41aa7c191d347860eaa`

const menu_questions = [
  {
    type: 'list',
    name: 'option',
    choices: ['Issue Reward', 'Add Asset', 'Exit'],
    message: 'Please select the required option from the list below ...'
  }
]

const login_questions = [
  {
    type: 'input',
    name: 'user',
    message: 'Enter your email ...'
  },
  {
    type: 'input',
    name: 'company',
    message: 'Enter your company ...'
  },
  {
    type: 'password',
    name: 'password',
    message: 'Enter your password ...'
  }
]

const add_asset_questions = [
  {
    type: 'input',
    name: 'name',
    message: 'Enter the name of the asset ...'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter the description of the asset ...'
  },
  {
    type: 'input',
    name: 'reward_amount',
    message: 'Enter the value of the asset ...'
  }
]

const reward_questions = [
  {
    type: 'input',
    name: 'campaign',
    message: 'Enter the name of the campaign ...'
  },
  {
    type: 'input',
    name: 'user',
    message: 'Enter the user employees email ...'
  },
  {
    type: 'input',
    name: 'amount',
    message: 'Enter the reward amount ...'
  }
]

program
  .command('addContact') // No need of specifying arguments here
  .alias('login')
  .description('Login user')
  .action(() => {
    console.log(
      chalk.yellow(
        figlet.textSync('MONEY BUGS', {horizontalLayout: 'full'})
      )
    )
    loginPrompt()
  })

function loginPrompt (user_details) {
  prompt(login_questions).then(user_details =>
    loginUser(user_details)
  )
}

function loginUser (user_details) {
  axios.post(api.login_link, {...user_details})
    .then(user => {
      user_details = user.data.data
      mainMenu()
    })
    .catch(err => {
      console.log(chalk.red('Username or password error, please try again.'))
      loginPrompt()
    })
}

function mainMenu (user_details) {
  prompt(menu_questions).then(answers => {
    if (answers.option === 'Add Asset') {
      console.log(chalk.red('Please complete the details below ...'))
      prompt(add_asset_questions).then((asset_answers) => {
        addAsset(asset_answers, user_details)
      })
    } else if (answers.option === 'Issue Reward') {
      console.log(chalk.red('Please complete the details below ...'))
      prompt(reward_questions).then(answers => {
        rewardEmployee(answers)
      })
    } else if (answers.option === 'Exit') {
      console.log(chalk.yellow(
        `Admin has succefully logged out ${moment().format('DD-MMMM-YYYY')}`))
      process.exit(1)
    }
    else {
      mainMenu(user_details)
    }
  })
}

function listProducts () {
  axios.get(api.list_assets)
    .then(assets => console.log(assets))
    .then(err => console.log(err))
}

function addAsset (asset_answers, user_details) {
  request.post(api.add_assert, {
    headers: {'Authorization': `token 69f97987d8e2b0384cb0b2695fbb80a7d9b6ed5aa4a6d41aa7c191d347860eaa`},
    form: {
      name: asset_answers.name,
      description: asset_answers.description,
      currency: 'BCXA',
      start_date: moment().format('YYYY-MM-DD'),
      end_date: moment().format('YYYY-MM-DD'),
      reward_total: asset_answers.reward_amount,
      reward_amount: asset_answers.reward_amount,
      status: 'active',
      max_per_user: 1,
      visible: true,
      request: true,
      value: 1
    }
  }, (err, httpResponse, body) => {
    if (err) {
      console.log(chalk.red('An error occurred please try again'))
      mainMenu()
      return
    }
    console.log(chalk.yellow(
      `Asset ${asset_answers.name}, ${asset_answers.details} has been successfully added`))
    mainMenu(user_details)
  })
}

function approveRequest () {

}

function rewardEmployee (emp_details) {
  axios.post(api.add_reward, {
    'campaign': emp_details.campaign,
    'user': emp_details.user,
    'amount': emp_details.amount,
    'currency': 'string',
    'status': 'accept',
    'reward_type': 'manual'
  }).then(reward => {
    console.log(chalk.yellow(
      `You have successfully rewarded employee with email ${emp_details.user}`))
    mainMenu()
  }).catch(err => {
    console.log(chalk.red('An error occurred please try again'), err)
    mainMenu()
  })
}

program.parse(process.argv)

