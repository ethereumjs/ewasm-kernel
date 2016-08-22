//
// This class parses a serialised Ethereum Block
//
// The input is a Buffer.
//
const Address = require('./address.js')
const ethUtil = require('ethereumjs-util')
const OldBlock = require('ethereumjs-block')

module.exports = class Block extends OldBlock {
  get number () {
    return ethUtil.bufferToInt(this.header.number)
  }

  get gasLimit () {
    return ethUtil.bufferToInt(this.header.gasLimit)
  }

  get difficulty () {
    return ethUtil.bufferToInt(this.header.difficulty)
  }

  get timestamp () {
    return ethUtil.bufferToInt(this.header.timestamp)
  }

  get coinbase () {
    return new Address(this.header.coinbase)
  }
}
