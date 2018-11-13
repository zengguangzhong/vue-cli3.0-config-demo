//api
let apiBaseUrl = ''

if (process.env.VUE_APP_MODE === 'production') {
  //  生产
  apiBaseUrl = 'https://app.chinacreditech.com/lgdb/'
} else if (process.env.VUE_APP_MODE === 'development') {
  //  开发
  apiBaseUrl = 'http://10.0.11.100:8080/lgdb/'
} else {
  //  uat
  apiBaseUrl = 'https://test-app.chinacreditech.com/lgdb/'
}

export default {
  apiBaseUrl
}