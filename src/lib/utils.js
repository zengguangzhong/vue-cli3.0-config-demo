/*
 * 获取url参数
 * */

export const getParam = name => {
  var url = location.href
  var reg = new RegExp(name + '=([^=&#]+)')
  var re = url.match(reg)
  if (re && re.length === 2) {
    return re[1]
  }
  return ''
}

/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (name) {
    if (typeof content !== 'string') {
      content = JSON.stringify(content)
    }
    window.localStorage.setItem(name, content)
  }
}

/**
 * 获取localStorage
 */
export const getStore = name => {
  if (name) {
    let data = window.localStorage.getItem(name)
    try {
      data = JSON.parse(data)
    } catch (e) {}
    return data
  }
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
  if (name) {
    window.localStorage.removeItem(name)
  }
}

export const isIos = () => {
  return Boolean(navigator.userAgent.match(/iphone|ipod/gi))
}

/*
 * fun：执行的函数；  防抖函数
 * delay 延迟
 * time  在time时间内必须执行一次
 * */
export const debounce = (fun, delay, time) => {
  let timeout
  let startTime = new Date()
  return function() {
    let curTime = new Date()
    clearTimeout(timeout)
    // 如果达到了规定的触发时间间隔，触发 handler
    if (curTime - startTime >= time) {
      fun.apply(this, arguments)
      startTime = curTime
      // 没达到触发间隔，重新设定定时器
    } else {
      timeout = setTimeout(() => {
        fun.apply(this, arguments)
      }, delay)
    }
  }
}

/*
 节流函数
 */

export const throttle = (fun, time) => {
  let timeout
  return function() {
    timeout && clearTimeout(timeout)
    timeout = setTimeout(() => {
      fun.apply(this, arguments)
    }, time)
  }
}
