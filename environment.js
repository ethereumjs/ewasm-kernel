const U256 = require('./u256.js')
const Address = require('./address.js')
const Block = require('./block.js')
const fakeBlockChain = require('./fakeBlockChain.js')

module.exports = class Environment {
  constructor (data) {
    const defaults = {
      block: new Block(),
      blockchain: fakeBlockChain,
      // gas tank
      gasPrice: 0,
      gasLeft: 1000000,
      gasRefund: 0,
      // call infromation
      address: new Address('0x0000000000000000000000000000000000000000'),
      origin: new Address('0x0000000000000000000000000000000000000000'),
      caller: new Address('0x0000000000000000000000000000000000000000'),
      callValue: new U256(0),
      callData: new Uint8Array(),
      // the ROM
      code: new Uint8Array(), // the current running code
      // output calls
      logs: [],
      selfDestruct: false,
      selfDestructAddress: new Address('0x0000000000000000000000000000000000000000'),
      // more output calls
      returnValue: new Uint8Array()
    }

    this.state = new Map()

    Object.assign(this, defaults, data || {})
  }

  addAccount (address, trie) {
    let account = new Map()
    account.set('nonce', trie.nonce || new U256(0))
    account.set('balance', trie.balance || new U256(0))
    account.set('code', trie.code || new Uint8Array())
    account.set('storage', trie.storage || new Map())
    this.parent.state.set(address.toString(), account)
  }

  isAccountPresent (address) {
    const account = this.state.get(address.toString())
    if (account) {
      return true
    } else {
      return false
    }
  }

  getBalance (address) {
    const account = this.parent.state.get(address.toString())
    if (account) {
      return account.get('balance')
    } else {
      return null
    }
  }

  getCode (address) {
    const account = this.parent.state.get(address.toString())
    if (account) {
      return account.get('code')
    } else {
      return Uint8Array.from(new Buffer([]))
    }
  }

  getBlockHash (height) {
    return this.blockchain.getBlock(height).hash()
  }

  set createHandler (value) {
    this.createhandler = value
  }

  set callHandler (value) {
    this.callhandler = value
  }

  // kernal
  create (code, value) {
    // STUB
    return [ 1, Address.zero() ]
  }

  call (gas, address, value, data) {
    // FIXME: create a child environment here
    const ret = this.callhandler({
      from: this.address,
      to: address,
      gasLimit: gas,
      value: value,
      data: data
    })
    return [ !!ret.executionOutcome, ret.returnValue ]
  }

  callCode (gas, address, value, data) {
    // STUB
    return [ 1, new Uint8Array() ]
  }

  delegateCall (gas, address, data) {
    // STUB
    return [ 1, new Uint8Array() ]
  }
}
