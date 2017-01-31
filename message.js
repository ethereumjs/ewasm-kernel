const U256 = require('./deps/u256.js')

module.exports = class Message {
  constructor (opts = {}) {
    const defaults = {
      // call infromation
      to: [],
      from: [],
      data: new Uint8Array(),
      sync: true,
      // resource info
      gas: new U256(0),
      gasPrices: new U256(0)
    }
    Object.assign(this, defaults, opts)
    this.hops = 0
    this._vistedAgents = []
  }

  finished () {
    if (this.sync) {
      this._vistedAgents.pop()
    }
  }

  addVistedKernel (kernel) {
    const parentMessage = kernel._messageQueue.currentMessage
    this.hops++
    if (this.sync && parentMessage) {
      this._vistedAgents = parentMessage._vistedAgents
      this._vistedAgents.push(kernel)
    }
  }

  isCyclic (kernel) {
    return this.sync && this._vistedAgents.some(process => process === kernel)
  }
}
