
let apiUrl
const apiUrls = {
  production: 'https://fries-api.herokuapp.com',
  development: 'http://localhost:3000'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}
console.log(window.location.hostname)
export default apiUrl;