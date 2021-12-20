import URLS from './apiUrl'

function getToken (tokenKey) {
  return localStorage.getItem(tokenKey)
}

function logOut (tokenKey) {
  return localStorage.removeItem(tokenKey)
}

function setToken (tokenKey, token) {
  localStorage.setItem(tokenKey, token)
}
const request = function (hasToken = false, url, requestBody, method, tokenKey = 'ADMIN_KEY') {
  const token = getToken(tokenKey) // get the token
  let headerDetails = {
    'Content-Type': 'application/json',
    'x-auth-token': token,
    'x-api-key': 'e8aa784c-6c76-11eb-9439-0242ac130002'
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
      mode: 'cors',
      headers: headerDetails,
      body: JSON.stringify(requestBody)
    })
  }
}

export default {
  request,
  getToken,
  setToken,
  logOut
}
