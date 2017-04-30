import app from './app'
import assert from 'power-assert'

describe('Test', () => {
  it('should export greeting', () => {
    assert(app === 'Hello')
  })
})
