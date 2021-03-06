const motto = 'your commission unbiased'
const app_name = 'Insure Rewards'

const api = {
  login_link: 'https://api.rehive.com/3/auth/login/',
  logout_link: 'https://api.rehive.com/3/auth/logout/',
  register_link: 'https://api.rehive.com/3/auth/register/',
}

const save_user_token = (data) => {
  console.log(data)
  localStorage.setItem('insure_rewards_user', JSON.stringify(data))
}

const checkLoggedIn = () => localStorage.getItem('insure_rewards_user')

const active_link = (link, location) => link === location.pathname
  ? 'active'
  : ''

const resolve_profile_pic = (profile_pic_link) => profile_pic_link
  ? profile_pic_link
  : require('../images/icon-no-pic.png')

export {
  motto,
  app_name,
  checkLoggedIn,
  api,
  save_user_token,
  active_link,
  resolve_profile_pic
}