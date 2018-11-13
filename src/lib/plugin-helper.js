import objectAssign from 'object-assign'

/**
 * 插件帮助函数-合并vm中的对象
 * @param {*} $vm vue实例参数
 * @param {*} options
 */
const mergeOptions = function ($vm, options) {
  const defaults = {}
  for (let i in $vm.$options.props) {
    if (i !== 'value') {
      defaults[i] = $vm.$options.props[i].default
    }
  }
  const _options = objectAssign({}, defaults, options)
  for (let i in _options) {
    $vm[i] = _options[i]
  }
}

export {
  mergeOptions
}
