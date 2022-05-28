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
        this._routerRoot = this
        this._router = this.$options.router
        this._router.init(this)
      }
      else {
        // child
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this
      }
    },
  })

  Vue.component('RouterView', {})
  Vue.component('RouterLink', {})
}

export {
  _Vue,
  install,
}
