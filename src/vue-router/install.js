// eslint-disable-next-line import/no-mutable-exports
let _Vue

function install(Vue) {
  if (install.installed && _Vue === Vue)
    return
  install.installed = true

  _Vue = Vue

  Vue.mixin({
    beforeCreate() {
      if (this.$options.router) {
        // root
      }
      // child
    },
  })

  Vue.component('RouterView', {})
  Vue.component('RouterLink', {})
}

export {
  _Vue,
  install,
}
