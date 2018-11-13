import axios from 'axios'
import baseConfig from '../../public/static/config'
import { vue as vm } from '@/main'
import { getStore } from '@/lib/utils'
import router from '@/router'
// import Cookies from 'js-cookie'

const instance = axios.create({
  timeout: 1500,
  withCredentials: false,
  baseURL: baseConfig.apiBaseUrl
})

// console.log(instance)
// 路由拦截
instance.interceptors.request.use(
  config => {
    let accessToken, idFintechUmUser
    try {
      // JSON.parse(getStore('userBaseInfo')) ? JSON.parse(getStore('userBaseInfo')) : Cookies.getJSON('userBaseInfo')
      let obj = JSON.parse(getStore('userBaseInfo'))
      accessToken = obj.accessToken
      idFintechUmUser = obj.idFintechUmUser
    } catch (e) {}
    config.headers.accessToken = accessToken || ''
    // console.log(accessToken)
    config.headers.idFintechUmUser = idFintechUmUser || ''

    vm.$toast.show({
      type: 'loading',
      text: '正在加载...',
      position: 'center',
      time: 0
    })
    return config
  },
  error => {
    vm.$toast.show({
      text: error.message
    })
    return Promise.reject(error)
  }
)

// 拦截响应
instance.interceptors.response.use(
  res => {
    vm.$toast.hide()
    if (res.data.errorCode !== '0') {
      vm.$toast.show({
        text: res.data.message
      })
      if (res.data.errorCode === '9999') {
        return router.replace('/login')
      }
      return Promise.reject(res.data)
    }
    return res.data.data
  },
  error => {
    vm.$toast.hide()
    vm.$toast.show({
      text: error.message
    })
    return Promise.reject(error)
  }
)

export function post(url, params, config) {
  return instance.post(url, params, config)
}
export function get(url, params, config) {
  return instance.get(
    url,
    {
      params: {
        ...params
      }
    },
    config
  )
}
