import { createMatcher } from './create-matcher'
import { install } from './install'

class VueRouter {
  constructor(options) {
    this.options = options

    const mode = options.mode || 'hash'

    this.matcher = createMatcher(options.routes)

    console.log(this.matcher.pathMap)

    switch (mode) {
      case 'hash':
        this.history = {}
        break
      case 'history':
        this.history = {}
        break
    }
  }

  init() {

  }
}

VueRouter.install = install
export default VueRouter
