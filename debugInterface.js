const opcodes = require('./opcodes.js')

/**
 * Debug Interface
 * This expose some functions that can help with debugging wast
 */
module.exports = class DebugInterface {
  constructor (kernel) {
    this.kernel = kernel
  }

  static get name () {
    return 'debug'
  }

  get exports () {
    return {
      'print': function (a) {
        console.log(a)
      },
      'printMem': function (offset, length) {
        console.log(`<DEBUG(str): ${this.getMemoryBuffer(offset, length).toString()}>`)
      }.bind(this),

      'printMemHex': function (offset, length) {
        console.log(`<DEBUG(hex): ${this.getMemoryBuffer(offset, length).toString('hex')}>`)
      }.bind(this),

      'evmStackTrace': function (sp, op) {
        const opcode = opcodes(op)
        if (opcode.number) {
          opcode.name += opcode.number
        }
        console.error(`op: ${opcode.name} gas: ${this.kernel.environment.gasLeft} sp: ${sp}`)
        console.log('-------------stack--------------')
        for (let i = sp; i >= 0; i -= 32) {
          console.log(`${(sp - i) / 32} ${this.getMemoryBuffer(i).toString('hex')}`)
        }
      }.bind(this)
    }
  }

  getMemoryBuffer (offset, length = 32) {
    const mem = this.kernel.memory.slice(offset, offset + length)
    return Buffer.from(mem).reverse()
  }
}
