import URLS from './apiUrl'

const tokenKey = ''

function getToken () {
  return localStorage.getItem(tokenKey)
}

function setToken (token) {
  localStorage.setItem(tokenKey, token)
}
const request = function (hasToken = false, url, requestBody, method) {
  const token = getToken() // get the token
  let headerDetails = {
    'Content-Type': 'application/json',
    'x-auth-token': token,
    'x-api-key': 'e8aa784c-6c76-11eb-9439-0242ac130002'
  }

  // check that token is available or api has token
  if (hasToken && token == null) {
    console.log('token')
  }

  // add token to header
  if (hasToken) {
    headerDetails = {
      'Content-Type': 'application/json',
      'x-auth-token': token,
      'x-api-key': 'e8aa784c-6c76-11eb-9439-0242ac130002'
    }
  }

  // set up the URL
  const postUrl = URLS.BASEURL + url
  if (method === 'GET') {
    return fetch(postUrl, {
      method,
      headers: headerDetails
    })
  } else {
    return fetch(postUrl, {
      method,
      headers: headerDetails,
      body: JSON.stringify(requestBody)
    })
  }
}

export default {
  request,
  getToken,
  setToken
}
